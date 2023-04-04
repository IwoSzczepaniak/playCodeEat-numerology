## Problem Statement

You have joined a team of developers who are working on a numerology application that provides insights into users' personalities based on their birth dates. Your client is excited about adding a new feature to it that helps users find new friends or even potential romantic partners based on their numerological compatibility.

The goal of this feature is to help users find friends or even romantic partners who are compatible according to their life-path numbers. Life-path numbers are calculated by reducing the digits in a user's birth date to a single-digit number, so for example the life-path number of a person born on April 1st, 2000 is 7.

Your task is to implement the `find_compatible_users(user, users)` method of the `User` class, which should return a list of ids of compatible users sorted from the most recently created to the older ones. Keep in mind that newer users have created ids that are greater than the older ones. As part of the client's requirements, users who have purchased the premium subscription should be able to see all their matches, while free users can only see up to 3 matches. 

To check the compatibility between two life-path numbers, you can refer to the compatibility table defined in the [helpers.py](http://helpers.py/) file. For example, if you want to check the compatibility between *x* and *y,* you can use `COMPATIBILITY_TABLE[x][y]`, which will give you a Boolean value indicating their compatibility.
