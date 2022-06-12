import { Rover } from "../src/entities/Rover";
import { Plateau } from "../src/entities/Plateau";
import { Position } from "../src/entities/Position";

describe("Rover", () => {
  let plateau: Plateau;

  beforeEach(() => {
    plateau = new Plateau(5, 5);
  });

  it.only("should be able to run commands", () => {
    const position = new Position(1, 2);

    const rover = new Rover(plateau, position, "N");

    rover.run("LMLMLMLMM");

    expect(rover.getDirection()).toEqual("N");
  });

  it("should be able to run commands", () => {
    const position = new Position(1, 1);

    const rover = new Rover(plateau, position, "E");

    rover.run("MMRMMRMRRM");

    expect(rover.getDirection()).toEqual("E");
  });
});
