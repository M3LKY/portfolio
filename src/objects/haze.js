import { BASE_LAYER, HAZE_MAX, HAZE_MIN, HAZE_OPACITY } from "../config/renderConfig.js";
import { clamp } from "../utils.js";
import * as THREE from 'three';

const imagePath = '../../resources/feathered60.png';
const hazeTexture = new THREE.TextureLoader().load(imagePath);
const mixColor = new THREE.Color().copy(new THREE.Color(0x0000ff)).lerp(new THREE.Color(0xffff00), 0.5);
const hazeSprite = new THREE.SpriteMaterial({ map: hazeTexture, color: 0x8AC4D0, opacity: HAZE_OPACITY, depthTest: false, depthWrite: false });

export class Haze {
  constructor(position) {
    this.position = position;
    this.obj = null;
  }

  updateScale(camera) {
    const dist = this.position.distanceTo(camera.position) / 250;
    const opacity = clamp(HAZE_OPACITY * Math.pow(dist / 2.5, 2), 0, HAZE_OPACITY);
    this.obj.material.opacity = opacity;
    this.obj.material.needsUpdate = true;
  }

  toThreeObject(scene) {
    const sprite = new THREE.Sprite(hazeSprite);
    sprite.layers.set(BASE_LAYER);
    sprite.position.copy(this.position);
    sprite.scale.multiplyScalar(clamp(HAZE_MAX * Math.random(), HAZE_MIN, HAZE_MAX));

    this.obj = sprite;
    scene.add(sprite);
  }
}
