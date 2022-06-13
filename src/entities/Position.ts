import { Plateau } from "./Plateau";
import { Directions } from "../enums";
import { DirectionsType } from "../types";

export class Position {
  constructor(public x: number, public y: number) {}

  public isOnPlateau(plateau: Plateau): boolean {
    if (this.x < 0 || this.x > plateau.getDimensionX()) {
      return false;
    }

    if (this.y < 0 || this.y > plateau.getDimensionY()) {
      return false;
    }

    return true;
  }

  public moveForward(direcion: DirectionsType) {
    switch (direcion) {
      case Directions.NORTH: {
        return new Position(this.x, this.y + 1);
      }
      case Directions.SOUTH: {
        return new Position(this.x, this.y - 1);
      }
      case Directions.EAST: {
        return new Position(this.x + 1, this.y);
      }
      case Directions.WEST: {
        return new Position(this.x - 1, this.y);
      }
      default:
        throw new Error("The direction is not valid!");
    }
  }
}
