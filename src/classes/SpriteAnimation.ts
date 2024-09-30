export class SpriteAnimation {
  public tiles: number[];
  public key: string;

  constructor(tiles: number[], key: string) {
    this.tiles = tiles;
    this.key = key;
  }
}

export const IDLE_R = new SpriteAnimation([0, 1, 2, 3, 4, 5], "IDLE_R");
export const IDLE_L = new SpriteAnimation([14, 13, 12, 11, 10, 9], "IDLE_L");
export const JUMP_R = new SpriteAnimation(
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  "RUN_R"
);
export const JUMP_L = new SpriteAnimation(
  [35, 34, 33, 32, 31, 30, 29, 28, 27],
  "RUN_L"
);
export const RUN_R = new SpriteAnimation(
  [36, 37, 38, 39, 40, 41, 42, 43],
  "JUMP"
);
export const RUN_L = new SpriteAnimation(
  [52, 51, 50, 49, 48, 47, 46, 45],
  "JUMP_R"
);
