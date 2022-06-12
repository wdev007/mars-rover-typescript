"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("../src/entities/Position");
describe("Position", () => {
    it("should be able return correct position X", () => {
        const position = new Position_1.Position(1, 1);
        expect(position.x).toEqual(1);
    });
    it("should be able return correct position Y", () => {
        const position = new Position_1.Position(1, 1);
        expect(position.y).toEqual(1);
    });
});
