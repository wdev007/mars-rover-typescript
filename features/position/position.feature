Feature: Position
  We need to know the new position when moving in a direction

  Scenario: Move north is still on plateau
    Given I start with ('1','1')
    When I move forward to 'N'
    Then I end up with 'y' = 2

  Scenario: Move south is still on plateau
    Given I start with ('1','1')
    When I move forward to 'S'
    Then I end up with 'y' = 0

  Scenario: Move east is still on plateau
    Given I start with ('1','1')
    When I move forward to 'E'
    Then I end up with 'x' = 2
    
  Scenario: Move west is still on plateau
    Given I start with ('1','1')
    When I move forward to 'W'
    Then I end up with 'x' = 0
