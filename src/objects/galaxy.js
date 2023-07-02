import * as THREE from 'three';
import { Star } from './star.js';
import { ARMS, ARM_X_DIST, ARM_X_MEAN, ARM_Y_DIST, ARM_Y_MEAN, CORE_X_DIST, CORE_Y_DIST, GALAXY_THICKNESS, HAZE_RATIO, NUM_STARS, OUTER_CORE_X_DIST, OUTER_CORE_Y_DIST } from '../config/galaxyConfig.js';
import { gaussianRandom, spiral } from '../utils.js';
import { Haze } from './haze.js';

export class Galaxy {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group(); // Create a group to hold the stars
    this.stars = [];
    this.haze = [];
    this.generateObjects();
    this.addToGroup();
    this.scene.add(this.group); // Add the group to the scene
  }

  generateObjects() {
    const generateStars = (numStars, distX, distY) => {
      const objects = [];
      for (let i = 0; i < numStars; i++) {
        const pos = new THREE.Vector3(
          gaussianRandom(0, distX),
          gaussianRandom(0, distY),
          gaussianRandom(0, GALAXY_THICKNESS)
        );
        const obj = new Star(pos);
        objects.push(obj);
      }
      return objects;
    };

    this.stars = [
      ...generateStars(NUM_STARS / 4, CORE_X_DIST, CORE_Y_DIST),
      ...generateStars(NUM_STARS / 4, OUTER_CORE_X_DIST, OUTER_CORE_Y_DIST),
    ];

    for (let j = 0; j < ARMS; j++) {
      const armStars = generateStars(NUM_STARS / 4, ARM_X_DIST, ARM_Y_DIST);
      armStars.forEach((star) => {
        star.position.copy(
          spiral(
            gaussianRandom(ARM_X_MEAN, ARM_X_DIST),
            gaussianRandom(ARM_Y_MEAN, ARM_Y_DIST),
            gaussianRandom(0, GALAXY_THICKNESS),
            (j * 2 * Math.PI) / ARMS
          )
        );
      });
      this.stars.push(...armStars);
    }

    this.haze = this.generateHazeObjects(NUM_STARS * HAZE_RATIO);
  }

  generateHazeObjects(numHaze) {
    const generateHaze = (numHaze, distX, distY) => {
      const objects = [];
      for (let i = 0; i < numHaze; i++) {
        const pos = new THREE.Vector3(
          gaussianRandom(0, distX),
          gaussianRandom(0, distY),
          gaussianRandom(0, GALAXY_THICKNESS)
        );
        const obj = new Haze(pos);
        objects.push(obj);
      }
      return objects;
    };

    return generateHaze(numHaze, CORE_X_DIST, CORE_Y_DIST);
  }

  addToGroup() {
    this.stars.forEach((star) => {
      star.toThreeObject(this.group); // Add stars to the group
    });

    this.haze.forEach((haze) => {
      haze.toThreeObject(this.group); // Add haze to the group
    });
  }

  updateScale(camera) {
    this.group.rotation.z += 0.02; // Adjust the rotation speed as desired

    this.stars.forEach((star) => {
      star.updateScale(camera);
    });

    this.haze.forEach((haze) => {
      haze.updateScale(camera);
    });
  }
}
