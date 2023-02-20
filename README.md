# Todo List in React

Styled todo list using React from module 14
![screenshot](/screenshot.png)

## Overview

This is a simple Todo list app created using React. Functionality includes adding new items, marking them as complete, and removing list items. This project serves as an introduction to the concept of CRUD (Create, Read, Update and Delete), as well as Hooks in React.

## Customizations

A few changes were made from the original exercise. I have added the ability to mark items as "completed", which adds a strikethrough to the text. The `isCompleted` attribute existed in the original code, but there was no way to toggle it. I added a "check mark" button to mark items as completed.

I also added a second button to each list item for the `remove` functionality. Previously, items were removed by clicking anywhere in the line, but now it is limited to just the "x" button.

I changed the overall styling as well. I centered the list on the page, changed the background to white, and added a red background to the header title.

## How to Run

~~[Click this link](https://zikman23.github.io/todo-list-zik/) to view the app live on GitHub.

This React app has been deployed to GitHub Pages using `gh-pages` by following the information provided [here](https://github.com/gitname/react-gh-pages).

It is viewable on the web without having to download and run it locally.~~ However, the source code is also provided if you choose to do so. You can download it and run the React app ([sample instructions](https://medium.com/@vikasharry03/react-setup-on-local-computer-912f9a551af3)).

## Future Improvements

Given that this is a simple app created using only React, it does not keep track of todo list items once the page is refreshed. Future improvements could include server integration to save any changes to the list.

Another small improvement will be the ability to "un-mark" items that are marked as complete. Currently, the checkmark does not act like a toggle, and you can only click it once to mark items as complete.
