const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

let today: string;
let actualAnswer: string;

function isItFriday(today: string) {
  return "Nope";
}

Given("today is Sunday", function () {
  today = "Sunday";
});

When("I ask whether it's Friday yet", function () {
  actualAnswer = isItFriday(today);
});

Then("I should be told {string}", function (expectedAnswer: string) {
  assert.strictEqual(actualAnswer, expectedAnswer);
});
