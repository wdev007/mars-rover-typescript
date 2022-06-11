import { ICoordinates, IRover } from "./interfaces";

export class Plateau {
  constructor(private coordinates: ICoordinates, private rovers: IRover[]) {}

  getPosition() {
    return {
      x: 5,
      y: 5,
    };
  }
}
