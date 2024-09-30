import * as THREE from "three";
import { CharacterControls } from "./classes/CharacterControls";
import foo from "./classes/ChunkLoader";

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

foo(scene);
const character = new CharacterControls(scene);

camera.position.z = 10;

const clock = new THREE.Clock();
function animate() {
  let deltatime = clock.getDelta();
  character.update(deltatime, camera);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
