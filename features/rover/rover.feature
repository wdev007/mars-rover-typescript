Feature: Rover directions
  We need to know if the moves are working

  Scenario: West
    Given Direction is 'W'
    When I tell you to turn left
    Then I should get 'S'

