import { Position } from "../src/Position";

describe("Position", () => {
  it("should be able return correct position X", () => {
    const position = new Position(1, 1);

    expect(position.getX()).toEqual(1);
  });

  it("should be able return correct position Y", () => {
    const position = new Position(1, 1);

    expect(position.getY()).toEqual(1);
  });
});
