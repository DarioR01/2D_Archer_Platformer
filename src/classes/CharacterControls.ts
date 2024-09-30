import * as THREE from "three";
import { Camera } from "three";
import {
  IDLE_R,
  IDLE_L,
  RUN_R,
  RUN_L,
  JUMP_L,
  JUMP_R,
} from "./SpriteAnimation";
import { SpriteFlipbook } from "./SpriteFlipBook";

export class CharacterControls {
  MOVEMENT_SPEED_PER_SECOND = 2;
  ANIMATION_DURATION_SECONDS = 1;
  spriteFlipbook: SpriteFlipbook;

  isFacingRight = true;
  isMoving = false;
  keysPressed = { w: false, a: false, s: false, d: false };
  currentAnimation = IDLE_R;

  isJump = false;

  constructor(scene: THREE.Scene) {
    this.spriteFlipbook = new SpriteFlipbook(
      "../sprites/archer.png",
      9,
      6,
      scene
    );
    this.spriteFlipbook.loop(
      this.currentAnimation.tiles,
      this.ANIMATION_DURATION_SECONDS
    );

    document.addEventListener(
      "keydown",
      (event) => {
        (this.keysPressed as any)[event.key.toLowerCase()] = true;
      },
      false
    );
    document.addEventListener(
      "keyup",
      (event) => {
        (this.keysPressed as any)[event.key.toLowerCase()] = false;
      },
      false
    );
  }

  public update(delta: number, camera: Camera) {
    this.updateState();
    this.updateAnimation();
    this.move(camera);
    this.spriteFlipbook.update(delta);
  }

  private updateState() {
    if (this.keysPressed.a) this.isFacingRight = false;
    else if (this.keysPressed.d) this.isFacingRight = true;

    if (this.keysPressed.a || this.keysPressed.d) this.isMoving = true;
    else this.isMoving = false;
  }

  private updateAnimation() {
    let nextAnimation;
    if (!this.isMoving) {
      if (this.isFacingRight) nextAnimation = IDLE_R;
      else nextAnimation = IDLE_L;
    } else {
      if (this.isFacingRight) nextAnimation = RUN_R;
      else nextAnimation = RUN_L;
    }

    if (this.currentAnimation.key !== nextAnimation.key) {
      this.currentAnimation = nextAnimation;
      this.spriteFlipbook.loop(
        this.currentAnimation.tiles,
        this.ANIMATION_DURATION_SECONDS
      );
    }
  }

  private move(camera: Camera) {
    if (this.keysPressed.a) {
      this.spriteFlipbook.addPosition(-0.03, 0, 0);
      camera.position.x -= 0.03;
    }
    if (this.keysPressed.d) {
      this.spriteFlipbook.addPosition(0.03, 0, 0);
      camera.position.x += 0.03;
    }
  }
}
