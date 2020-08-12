# React battleship challenge

This project is being developed using Reactjs and Redux to validate the use of various tools in this code ecosystem.

## Table of Contents

- [Installation](#Installation)

## Installation and execution

To install dependencies execute the following commands in the `root folder`.

    npm install
    npm start

## Folder structure

A well organized and standardized folder structure is vital for debugging and future development of the project, providing great consistency of understanding. The folder structure selected for this project is largely based on the official examples and demos of the Reactjs and React-redux development patterns.

    .
    ├── public
    └── src
        ├── components
        │   ├── Board               # Tabletop board component
        │   └── Square              # Single cells of the board component
        ├── containers
        │   ├── App                 # Root container component
        │   └── Game                # Container of the Board and Square
        └── redux
            ├── reducers            # Contains the reducers and the utility functions to initialize the state
            │   └...
            ├── actions.js          # Container of the Board and Square
            ├── actionTypes.js      # Container of the different action types
            └── store.js            # The store initializer
