import { IPosition } from "./interfaces/IPosition";

export class Position implements IPosition {
  constructor(private x: number, private y: number) {}

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }
}
