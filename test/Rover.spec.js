"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rover_1 = require("../src/entities/Rover");
const Plateau_1 = require("../src/entities/Plateau");
const Position_1 = require("../src/entities/Position");
describe("Rover", () => {
    let plateau;
    beforeEach(() => {
        plateau = new Plateau_1.Plateau(5, 5);
    });
    it.only("should be able to run commands", () => {
        const position = new Position_1.Position(1, 2);
        const rover = new Rover_1.Rover(plateau, position, "N");
        rover.run("LMLMLMLMM");
        expect(rover.getDirection()).toEqual("N");
    });
    it("should be able to run commands", () => {
        const position = new Position_1.Position(1, 1);
        const rover = new Rover_1.Rover(plateau, position, "E");
        rover.run("MMRMMRMRRM");
        expect(rover.getDirection()).toEqual("E");
    });
});
