import { Position } from "../entities";
import { DirectionsType } from "../types";

export interface IRover {
  run(commands: string): void;
  getPosition(): Position;
  getDirection(): DirectionsType;
}
