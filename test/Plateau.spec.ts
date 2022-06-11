import { Plateau } from "../src/Plateau";

describe("Plateau", () => {
  it("should be able get positions", () => {
    const plateau = new Plateau({ x: 5, y: 5 }, []);

    expect(plateau.getPosition().x).toEqual(5);
    expect(plateau.getPosition().y).toEqual(5);
  });
});
