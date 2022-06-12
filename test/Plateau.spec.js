"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Plateau_1 = require("../src/entities/Plateau");
describe("Plateau", () => {
    it("should be able get positions", () => {
        const plateau = new Plateau_1.Plateau(5, 5);
        expect(plateau.getDimensionX()).toEqual(5);
        expect(plateau.getDimensionY()).toEqual(5);
    });
});
