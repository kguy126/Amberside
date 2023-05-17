# Answer Code


I chose react because upon seeing how the program worked i saw the Modularity of it and instantly though of react components. 

1. Instructions on how to build this project:
* npx create-react-app my-app was used to create the my-app folder
Install these necessary dependencies: //ensure latest versions
npm install react-router-dom 
npm install axios (to communicate with backend)
npm install react-query (for fetching data)

once you have all these dependencies inorder,your imports should be working fine. to run the app
use npm start in one terminal for the front end 
and *concurrently* open another terminal and run the back end as instructed in the question set 

* .env file was used to change react app port to 5000 to avoid clashing with the backend at 3000

Note: this can also be done used at once using concurrently but I saw it best not to edit the already provided code. 


A quick run down.
App.js contains two componets Borough Options which displays our options in picking Boroughs and CoffeeShopTable which displays coffee shops and their revenues. It is also from there we get our total revenue as we calculate it based off of our filtered options. 
Borough options fetches borough statistics from the server using axios, and renders a dropdown select menu with the fetched data. CoffeeShopTable Then takes the data and queries the results as requested 
Because this a simple project I decided to keep the styling inline as not much was required.

node modules will be added to git ignore.