Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user hasn't specified a number of events to display 
When the search is executed 
Then the search result will display 32 results, which is the default number

Scenario: User can change the number of events they want to see
Given the user decides to see a different number n!=32 of events in the search results 
When the user types a number n 
Then the search results will display n event elements