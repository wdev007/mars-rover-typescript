const assert = require("assert");

const { Given, When, Then } = require("@cucumber/cucumber");

let today;
let actualAnswer;

function isItFriday(today) {
  return "Nope";
}

Given("today is Sunday", function () {
  today = "Sunday";
});

When("I ask whether it's Friday yet", function () {
  actualAnswer = isItFriday(today);
});

Then("I should be told {string}", function (expectedAnswer) {
  assert.strictEqual(actualAnswer, expectedAnswer);
});
