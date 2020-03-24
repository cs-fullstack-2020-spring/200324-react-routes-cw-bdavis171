# 20-03-24 React Routes CW
Set Up
- Create a new react app called `cw-app`
- Create a class based component called `AppContainer` with the text `React Routes CW`
- Reference the `AppContainer` component in App.js

- Create a class based component called `StarWarsCharacters`
- Display the name, birth year and gender of star wars characters from this api : https://swapi.co/api/people/ 

- Create a class based component called `AddCharacter`
- Display a form with fields for name, birth year, and gender

Using Routes
- Install react-router-dom using this command in the terminal INSIDE your react app : `npm install react-router-dom`
- Import BrowserRouter as Router, Link and Route from react-router-dom into your `AppContainer` component
- Create a link for the `AppContainer` in the `AppContainer` component
- Create a link and route for the `StarWarsCharacters` component in the `AppContainer` component

Using Forms
- When the user submits the form display the submission in the `AddCharacter` component


Using Forms - Challenge
- When the user submits the form add it to the beginning of the characters displayed in the `StarWarsCharacters` component
    - Hint : depending on where you call your fetch you will ony be able to add one name - this is fine for this exercise