# Data

## Data layer

- List of Gentlemen
  - id
  - name
  - status
  - profession
  - twitter
  - picture
  - alternativeText
  - selected

## Data modification

- toggle selected property of gentleman
- select all gentlemen
- delete a gentleman

# Components

## App

- Contains the gentlemen list
- Contains the function "toggle"
- Contains the function "select all"
- Contains the function "delete"
- Contains Header component
- Contains Controls component
- Sends the function "delete" and "toggle" to Gentleman
- Sends the function "select all" to Button
- Sends the list of gentlemen to Info

## Header

- Displays the main title

## Controls

- Contains Info component
- Contains a button to select all gentlemen

## Info

- Receives the list of gentlemen from App
- Display number of selected gentlemen

## Button

- Receives the function to "select all"

## Gentleman

- Receives the function to "delete"
- Receives the function "toggle"
- Receives a gentleman
