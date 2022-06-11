import { IPosition } from "./IPosition";

export interface IRover {
  getPosition(): IPosition;
  move(): void;
  turnRigth(): void;
  turnLeft(): void;
}
