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
![AllUsers](https://user-images.githubusercontent.com/105569378/198905864-51341cf6-454a-4489-9a55-c1bc7fd1bd24.png)

Friends
![Friends](https://user-images.githubusercontent.com/105569378/198905873-9ecb947c-8e3c-46af-a94c-c9fd7a347bdc.png)

## Walkthrough Video

- [Social Network API video link]()


## Packages

* Express.js https://www.npmjs.com/package/express
* Mongoose https://www.npmjs.com/package/mongoose to connect to MongoDB database

## Questions
For additional questions and information, please visit my [GitHub profile](github.com/Cinderbeast/)
or reach out via email at cindychynoweth@gmail.com or cindychynoweth@hotmail.com

## Authors and Acknowledgements

Created by Univertiy of Utah Coding Bootcamp Student, Cindy Chynoweth with the help of other AMAZING developer's out there
​
