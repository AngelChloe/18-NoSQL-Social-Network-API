## 18 NoSQL Challenge: Social Network API
​

## Description 
​This application is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.
​
This backend can be used for social media startups, and uses a NOSQL database, Express.js for routing, MongoDB database, and Mongoose ODM to handle large amounts of unstructured data, including User and Thought models and schemas and Reaction subdocument schema. When the application is invoked, the server is started and Mongoose models are synced to the MongoDB database.

API GET routes in Insomnia Core for users and thoughts show data and is displayed in a formatted JSON. API POST, PUT, and DELETE routes in Insomnia Core successfully create, update, and delete users and thoughts in the database. API POST and DELETE routes in Insomnia Core successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## User Story
As A social media startup, I WANT an API for my social network that uses a NoSQL database.  So that my website can handle large amounts of unstructured data.


## Table of Contents

1. [Acceptance Criteria](#acceptance-criteria)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Screenshots](#screenshots)
5. [Walkthrough Video](#walkthrough-video)
6. [Packages](#packages)
7. [Questions](#questions)
8. [Authors and Acknowledgements](#authors-and-acknowledgements)

## Acceptance Criteria

- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation
​
Clone the repository, navigate to the project folder on your CLI and run the following command to install Node.js:

- npm install

## Usage 
Run the following command on your CLI to run the application:

- npm start
- Make sure you are connected to Mongodb

## Screenshots

All Useres
![AllUsers](https://user-images.githubusercontent.com/105569378/201570475-0c4a2a6c-466d-46a8-b7c5-838728a11888.png)

Create New User
![CreateNewUser](https://user-images.githubusercontent.com/105569378/201570492-9640801a-a5bd-482d-bbd8-c44e81f90299.png)

Friends
![Friends](https://user-images.githubusercontent.com/105569378/201570509-7a05c445-60bd-464a-8ce7-4c5c07be6613.png)

Add A Friend
![AddAFriend](https://user-images.githubusercontent.com/105569378/201570520-40003e00-a324-4ed6-aae5-5bd942dc83cf.png)

Create a thought
![CreateAThought](https://user-images.githubusercontent.com/105569378/202322370-92e65cc0-3611-4574-b745-69a2fc642647.png)

Create A Reaction To A Thought
![CreateReactionToThought](https://user-images.githubusercontent.com/105569378/202322384-836a4735-92e1-4a47-9fc1-bffcf56f2b5f.png)


## Walkthrough Video

- [Social Network API video link](https://drive.google.com/file/d/1Q8OqbIeWMOBuvs5QYhloxdHhmuRO0F_z/view)


## Packages

* Express.js https://www.npmjs.com/package/express
* Mongoose https://www.npmjs.com/package/mongoose to connect to MongoDB database

## Questions
For additional questions and information, please visit my [GitHub profile](github.com/Cinderbeast/)
or reach out via email at cindychynoweth@gmail.com or cindychynoweth@hotmail.com

## Authors and Acknowledgements

Created by University of Utah Coding Bootcamp Student, Cindy Chynoweth with the help of other AMAZING developer's out there.  Special Thanks To Steve Cosgrove!
​
