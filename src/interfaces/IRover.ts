import { MovementsType } from "../types/Movements";

export interface IRover {
  move(moviment: MovementsType): void;
  turnRigth(): void;
  turnLeft(): void;
}
