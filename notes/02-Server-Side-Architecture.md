# App Architecture

## Intro

* React App
* Express
* MongoDB

## Node vs Express

* Node: Javascript Runtime, It is to execute run Javascript outside the web browser

* Express: library that runs in the Node runtime. Makes it easy to use HTTP traffic easier

## High Level Architecture

* Node to Express
* Express to handlers
* Implement handlers
* Handlers generate response to Node
* Node responds to the request

## Generating an Express App

* We are using common js module
* we are not using import express from 'express' ES2015 modules
* bare minimum express apps, import express create an app and handle a request and send a response

## Express Route Handlers

* app get req res

## Pre-deploy Heroku Checklist

* It is very happy provider and we can get it going for free and easy
* Dynamic port binding
* specify node environment in the package.json
  * see engines objects
* specify start script
  * see scripts start script, this is for heroku
* create .gitignore file, heroku does not need dependencies

## Deploy to Heroku

* Create a Heroku account
* Installing heroku cli

## Heroku Deployment

* create remote called heroku to the git repo on Heroku
* push the code to heroku
  * git push heroku master
    Note: It could happen that it fails the problem is that we need to have the package.json in the root folder
* checking heroku logs, type: heroku logs
