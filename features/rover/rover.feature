Feature: Rover
  We need to know if the moves are working
  
  Scenario: Direction east
    Given Direction is east
    When I go from east to the left
    Then I should get direction 'N' (north)

  Scenario: Direction south
    Given Direction is south
    When I go from south to the left
    Then I should get direction 'E' (east)
  
  Scenario: Direction west
    Given Direction is west
    When I go from west to the left
    Then I should get direction 'S' (south)
