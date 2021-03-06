import { IRover } from "../interfaces";
import { Movements, Directions } from "../enums";
import { MovementsType, DirectionsType } from "../types";

import { Plateau } from "./Plateau";
import { Position } from "./Position";

export class Rover implements IRover {
  constructor(
    private plateau: Plateau,
    private position: Position,
    private direcion: DirectionsType
  ) {}

  public run(commands: string): void {
    commands.split("").forEach((command) => {
      if (Object.values(Movements).includes(command as any)) {
        this.move(command as Movements);
      }
    });
  }

  public getPosition() {
    return this.position;
  }

  public getDirection() {
    return this.direcion;
  }

  private move(moviment: MovementsType): void {
    switch (moviment) {
      case Movements.LEFT: {
        this.turnLeft();
        break;
      }
      case Movements.RIGHT: {
        this.turnRight();
        break;
      }
      case Movements.ADVANCE: {
        this.advance();
        break;
      }
      default:
        throw new Error("Invalid moviment");
    }
  }

  private turnLeft(): void {
    switch (this.direcion) {
      case Directions.EAST: {
        this.direcion = Directions.NORTH;
        break;
      }
      case Directions.NORTH: {
        this.direcion = Directions.WEST;
        break;
      }
      case Directions.WEST: {
        this.direcion = Directions.SOUTH;
        break;
      }
      case Directions.SOUTH: {
        this.direcion = Directions.EAST;
        break;
      }
      default:
        throw new Error("Invalid direction");
    }
  }

  private turnRight(): void {
    switch (this.direcion) {
      case Directions.EAST: {
        this.direcion = Directions.SOUTH;
        break;
      }
      case Directions.NORTH: {
        this.direcion = Directions.EAST;
        break;
      }
      case Directions.WEST: {
        this.direcion = Directions.NORTH;
        break;
      }
      case Directions.SOUTH: {
        this.direcion = Directions.WEST;
        break;
      }
      default:
        throw new Error("Invalid direction");
    }
  }

  private advance(): void {
    const newPosition = this.position.moveForward(this.direcion);

    if (!newPosition.isOnPlateau(this.plateau)) {
      throw new Error("Can't move out of plateau");
    }

    this.position = newPosition;
  }
}
