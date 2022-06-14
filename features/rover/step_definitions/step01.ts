import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

import { DirectionsType } from "../../../src/types";
import { Plateau, Position, Rover } from "../../../src/entities";

let rover: Rover;
let direction: DirectionsType;

Given("Direction is {string}", (direction: DirectionsType) => {
  rover = new Rover(new Plateau(5, 5), new Position(0, 0), direction);
});

When("I tell you to turn left", () => {
  rover.run("L");
  direction = rover.getDirection();
});

Then("I should get {string}", (expectedAnswer: string) => {
  assert.strictEqual(direction, expectedAnswer);
});
