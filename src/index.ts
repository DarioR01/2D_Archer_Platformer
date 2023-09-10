import * as THREE from "three";
import { SpriteFlipbook } from "./classes/SpriteFlipBook";
import archer from "../public/sprites/character/archer.png";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const character = new SpriteFlipbook("../sprites/archer.png", 14, 7, scene);

character.loop([0, 1, 2, 3], 1);

camera.position.z = 5;

const clock = new THREE.Clock();
function animate() {
  let deltatime = clock.getDelta();
  character.update(deltatime);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
