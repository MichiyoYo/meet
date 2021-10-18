Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
Given a list of events is displayed on the page 
When a user looks at the list of events 
Then the user should see that each event is collapsed by default

Scenario: User can expand an event to see its details
Given a list of collapsed events on the page 
When the user clicks on the Show details button of an event element 
Then the event element expands, showing the event's details

Scenario: User can collapse an event to hide its details
Given an expanded event element 
When the user clicks on the Hide details button of the event element 
Then the event element collapses, hiding the details of the event