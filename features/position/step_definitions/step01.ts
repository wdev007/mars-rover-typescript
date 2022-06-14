import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

import { Position } from "../../../src/entities";
import { Directions } from "../../../src/enums";

let position: Position;
let y: number;

Given("I start with x = 1 and y = 1", () => {
  position = new Position(1, 1);
});

When("I move forward to NORTH", () => {
  y = position.moveForward(Directions.NORTH).y;
});

Then("I end up with y = {int}", (expectedAnswer: number) => {
  assert.strictEqual(y, expectedAnswer);
});
