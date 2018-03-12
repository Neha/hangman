# Let's Play Hangman!!

A small game to guess the Pokemon Name.

# Tech Stack
React - For view
Redux - For State Managment 

# Architecure 
 src 
  /Actions
    alphabats.js
    click.js
    hangman.js
  /Reducers
    hangman.js
    index.js
  /Data
    alphabat.js
    pokemon.js
    
  components:
  Alphabat.js
  Answer.js
  Gamepage.js
  Index.js
  LifeCounter.js
  
  Create Store:
  store.js
  
 public 
   /index.html
   /resources
   
 # Flow of Application
 
 # OnLoad : 
 getPokemon() Action call the Pokemon JSON .
 SAVE_POKEMON ACTIONCREATOR - generate the random Pokemom Name. Push the state - hangman with the 'newState.wordToShow' at Answer.js Component
 getAlphabats() Action call the Alphabat JSON 
 LOAD_ALPHABAT ACTIONCREATOR - Load the all Alphabat view at  Alphabat.js Component
          
 # Onclick of Alphabat : 
 clickAlphabat() -> CLICK_ALPHABAT check the which Alphabat is clicked and update the 'arr'.
 'arr' will also match with the  'newState.selectedPokemon' to check the guessed word is right or not.
 Life counter will also reduce if the guess is wrong and the component LifeCounter.js
      
 # GamePage.js : 
 The component which hold the store, and other component
 
 # Index.js : 
 The root component
 
 # Components connected with the store: Alphabats.js, Answer.js, LifeCounter.js
 
 
# How to run the application?
1) Require - Node latest version
2) Run on terminal  npm install --save-dev  to save the all packages
3) Once the packages are installed and you have node_modules folder
4) Run the command . - npm start
5) http://localhost:3000/ check the application

# DEMO 
https://hangman-ae6c3.firebaseapp.com/
