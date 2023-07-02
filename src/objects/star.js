import * as THREE from 'three';
import { BLOOM_LAYER, STAR_MAX, STAR_MIN } from '../config/renderConfig.js';
import { starTypes } from '../config/starDistributions.js';
import { clamp } from '../utils.js';

const imagePath = '../../resources/sprite120.png';
const texture = new THREE.TextureLoader().load(imagePath);
const materials = starTypes.color.map((color) => new THREE.SpriteMaterial({ map: texture, color: color }));

export class Star {
  constructor(position) {
    this.position = position;
    this.starType = this.generateStarType();
    this.obj = null;
  }

  generateStarType() {
    let num = Math.random() * 100.0;
    const pct = starTypes.percentage;

    for (let i = 0; i < pct.length; i++) {
      num -= pct[i];
      if (num < 0) {
        return i;
      }
    }

    return 0;
  }

  updateScale(camera) {
    const dist = this.position.distanceTo(camera.position) / 250;

    // Update star size
    const starSize = clamp(dist * starTypes.size[this.starType], STAR_MIN, STAR_MAX);
    if (this.obj) {
      this.obj.scale.set(starSize, starSize, starSize);
    }
  }

  toThreeObject(scene) {
    const sprite = new THREE.Sprite(materials[this.starType]);
    sprite.layers.set(BLOOM_LAYER);
    sprite.scale.multiplyScalar(starTypes.size[this.starType]);
    sprite.position.copy(this.position);
    this.obj = sprite;
    scene.add(sprite);
  }
}
