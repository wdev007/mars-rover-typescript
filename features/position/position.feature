Feature: Position

    Scenario: is on plateau
        Given I start with x = 1 and y = 1
        When I move forward to NORTH
        Then I end up with y = 2
