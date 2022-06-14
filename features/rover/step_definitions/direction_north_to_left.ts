import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

import { Directions } from "../../../src/enums";
import { DirectionsType } from "../../../src/types";
import { Plateau, Position, Rover } from "../../../src/entities";

let rover: Rover;
let direction: DirectionsType;

Given("Direction is north", () => {
  rover = new Rover(new Plateau(5, 5), new Position(0, 0), Directions.NORTH);
});

When("I go from north to the left", () => {
  rover.run("L");
  direction = rover.getDirection();
});

Then("I should get direction {string} \\(west)", (expectedAnswer: string) => {
  assert.strictEqual(direction, expectedAnswer);
});
