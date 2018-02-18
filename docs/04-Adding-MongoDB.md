# Adding MongoDB

## Server Structure Refactor

* There is not convention how to structure a project
* server
  * configure
  * routes
  * services
  * index.js

Note: this is the initial Structure

## The theory of Authentication

* Lets see what we can learn from This because in reality this is a course for learning node, react, redux and some other cool techniques, kudos to the author.

* Login with user and password
* Server responds to the client with some sort of a token
* Client saves the token and then it includes it in subsequents requests

## Signing In Users with OAuth

* How do we sign in with email and password

  * sign up with email and password
  * sign out
  * sign in with email and password -> welcome back and allow to login because it is the same email and password

* OAuth world (Google)
  * sign up with a google account, we get the google profile, we take the id out of the profile
  * sign out
  * sign in, here is the profile again, take the id again and trust that google is giving

## Introduction to MongoDB

* Node -> Mongoose.js -> MongoDB
* Mongoose is recommended but it is optional
* Mongoose have two main models
  * Model class -> it represents an entire collection
  * Model instance -> represents a single instance in the collection

## MongoDB Setup

* It is better to configure it remotely
* The course instructor is showing how to configure it using mLab.
  * create and account in mLab
  * create a database
  * create a database user (different from the app user)

## Connecting Mongoose to Mongo

* Install Mongoose
* Wire up mongoose to start using it with MongoDB

## Mongoose Model class

* Mongoose needs to describe all the fields of a model

## Saving model instances

* Creating a models

## Passport callbacks

\*
