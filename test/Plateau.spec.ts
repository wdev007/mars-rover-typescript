import { Plateau } from "../src/entities/Plateau";

describe("Plateau", () => {
  it("should be able get positions", () => {
    const plateau = new Plateau(5, 5);

    expect(plateau.getDimensionX()).toEqual(5);
    expect(plateau.getDimensionY()).toEqual(5);
  });
});
