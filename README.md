# Soccer Scoreboard Generator
Developed by FSU Devs: Ben Platt, Dave Mason, Raymond Johnson, Rahul Siddhartha Maripudi <br />
Frostburg State University <br />
Professor Michael Flinn

# The Problem
This application was originally developed to be used by parents and guardians of soccer players in the pee-wee leagues. The problem we aim to solve is the issue of spectators not knowing the score of the game or the time remaining. 

# Use Cases
We intend for one parent (the "administrator") to create an "instance" of their childs game, with accurate team names, scores, and gametime. This parent will be responsible for updating the information that will be displayed on the instance of the website. We have developed an intuitive UI to assist with this. Once this parent has created the session, they can send a unique link out to anybody in the world so that they can keep accurate track of the game. When a team scores, the administrator can dynamically change the score in the application. If the clock stops for any reason, the administrator can reflect that in the application with the reason. The reason will then be displayed for all spectators. When the game ends, the session will remain active for 7 days, so parents who missed the game can always go back and see the results (provided that they have the link).

# Files Included - Location and Importance
The homepage directory includes the images that we used, the homepage html, and the styles.
The scoreboard directory includes the javascript for creating the scoreboard, and the javascript for creating the timer.
The urlEmailTo directory includes the code for creating a unique link and sending it out via email.
EditingPage.html is the page that shows up when you click "Create scoreboard".
Main.js sets the functionality of the scoreboard. Including changing the team names and the score.
inProgress.html is the page where the game is played (i.e. the clock runs down and the scores can be changed).

# In the Future
We may develop a full backend for our application. Right now, there are only plans to create the working front-end version.

# About Us
We are the FSU Devs, a team that was created for a project in Professor Michael Flinn's Advanced Software Engineering class at Frostburg State University. We are all students in Frostburg's Masters of Applied Computer Science program.
