import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

import { Position } from "../../../src/entities";
import { DirectionsType } from "../../../src/types";

let position: Position;
const coordinates = { x: 0, y: 0 };

Given("I start with \\({int}, {int})", (x: number, y: number) => {
  position = new Position(x, y);
});

When("I move forward to {string}", (direction: DirectionsType) => {
  coordinates.y = position.moveForward(direction).y;
  coordinates.x = position.moveForward(direction).x;
});

Then("I end up with {string} = {int}", (axis: "x" | "y", coordinate: number) => {
  assert.strictEqual(coordinates[axis], coordinate);
});
