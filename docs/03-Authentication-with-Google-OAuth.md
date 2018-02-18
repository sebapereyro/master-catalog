# Authentication with Google Auth

This is very intense and it takes time. but we have done it before and we
will use learn something that we can use later

## How are we tackling this feature?

* We want a button that looks like the login with Google

## The OAuth flow

* Client - User clicks on the login button /auth/google
* Server - Forwards users requests to Google
* Google - Ask user for permissions
* Client - grants permissions
* Google - redirects User to App Server with a code /auth/google/callback?code=xxx
* Server - puts the user on hold and take the code from the URL
* Server - uses the code to talk to Google
* Google - Google provide users information
* Server - Gets user details and stores that to the DB
* Server - set a token and send that to the Client
* Client - receives a message that he is logged in
* Client - makes requests with auth token

## Overview of PassportJS

It is a helper library, automatically takes cares of a lot of details on the auth with google

* Passport has very common complaints. are here:

  * Does help automate the process, it automates 95%
  * Understanding what we are installing for using passport
  * if you want multiple provider, a strategy per provider

* When we use passport we use 2 libraries
  * passport
  * passport strategy (Google, facebook, twitter)

Documentation: http://www.passportjs.org/

## Enabling Google OAuth API

* Sign up on the google api

## Securing API Secrets

* see how we created the config/keys.js

## Google Strategy Options

* googleClientID
* googleClientSecret
* google callback url

## Testing OAuth

* Configuring passport
* Routing for authentication flow

## Authorized Redirect URI's

## OAuth Callbacks

## Access vs Refresh Tokens

* Access Tokens: this is for allowing us to reach out to GoogleStrategy
* Refresh refreshToken in order to update auth token

#Nodemon setup
