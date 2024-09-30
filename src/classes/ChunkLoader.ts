import * as map from "../map/testMap.json";
import { Scene } from "three";
import * as THREE from "three";
import { Texture } from "three";

export default (scene: Scene) => {
  const spriteHash = {
    1: new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load("../tiles/tile_0001.png"),
    }),
    14: new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load("../tiles/tile_0014.png"),
    }),
    15: new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load("../tiles/tile_0015.png"),
    }),
    16: new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load("../tiles/tile_0016.png"),
    }),
  } as { [key: number]: any };
  for (const layer of map.layers) {
    const chunks = layer.chunks;
    for (const chunk of chunks) {
      for (let i = 0; i < chunk.data.length; i++) {
        if (chunk.data[i] === 0) continue;
        const posX = i % chunk.width;
        const posY = Math.trunc(i / chunk.height);
        const sprite = new THREE.Sprite(spriteHash[chunk.data[i]]);
        sprite.position.x = posX + chunk.x;
        sprite.position.y = posY - chunk.y;
        scene.add(sprite);
      }
    }
  }
};
