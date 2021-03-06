Feature: Rover
  We need to know if the moves are working
  
  Scenario: Direction east to left
    Given Direction is 'E'
    When I turn 'L'
    Then I should get direction 'N'

  Scenario: Direction north to left
    Given Direction is 'N'
    When I turn 'L'
    Then I should get direction 'W'

  Scenario: Direction south to left
    Given Direction is 'S'
    When I turn 'L'
    Then I should get direction 'E'
  
  Scenario: Direction west to left
    Given Direction is 'W'
    When I turn 'L'
    Then I should get direction 'S'

  Scenario: Direction east to right
    Given Direction is 'E'
    When I turn 'R'
    Then I should get direction 'S'

  Scenario: Direction north to right
    Given Direction is 'N'
    When I turn 'R'
    Then I should get direction 'E'

  Scenario: Direction south to right
    Given Direction is 'S'
    When I turn 'R'
    Then I should get direction 'W'
  
  Scenario: Direction west to right
    Given Direction is 'W'
    When I turn 'R'
    Then I should get direction 'N'