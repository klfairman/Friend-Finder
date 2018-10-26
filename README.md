#Friend Finder - an app using Node and Express Server

###Overview

The Friend Finder is designed to pair users with compatible friends based on their results from a 10 question survey - not dissimilar from a dating app.  It is a full-stack app which use Express.js to handle routing and Heroku for deployment. Materialize.css was used for formatting and style.

A get route was used to display the survey page, as well as the url /api/friend. A post route, /api/friends, was used to handle incoming survey results and compatability logic.

Survey takers answers were converted into an array of numbers. Once that was done, the difference between the survey takers answers were compared to the scores of others.  "totalDifference" was calculated, and the absolute value of the difference in answers (e.g. 2-4 and 4-2 brought about the same result: 2) was used to find a match.

Once a match was made, a modal popped up to display the name and image of the compatible friend.





###Markdown grid

| method | path         | dataIn                                 | dataOut          | description                                   |
|--------|--------------|----------------------------------------|------------------|-----------------------------------------------|
| get    | /survey      | 0                                      | link to survey   | routes users to home page                     |
| get    | /api/friends | 0                                      | possible friends | will display JSON of possible friends         |
| post   | /api/friends | survey results and compatability logic | 0                | will handle incoming survey results and logic |