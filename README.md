# dungeonCore
While it's probably also a genre of metal, in this case dungeonCore is a lightweight web app to manage DnD campaigns.
Use it to track how many sessions you have going, see what characters are in play, and view the maps you're using. 

https://quiet-cove-97838.herokuapp.com/

***

### Features
-Create, View, Edit, and Delete your campaigns with impunity  
-Secured login  
-Show off your campaigns on the homepage - or not!  

### Technologies Used
* Node.js
* Express
* EJS
* Normalize.css

### Unsolved Problems

- Username uniqueness is not enforced
- If you try and access a page without auth, you don't get redirected BACK to that page after login
- Code is not dry, could use more organization
- On sign up, you are immediately directed to login
- Login Errors and Successes

### Feature Expansions
- Have characters 'owned' like campaigns are owned by users
- Have campaigns show up in "my Campaigns" if you have a character in that campaign - segment myCampaigns by campaigns you own vs ones you play

***

### Build Notes
Previously in this section, I had an ongoing build diary where I documented what I had achieved in accordance with my proposed build schedule. I've moved this text to my blog BespokePixels: https://bespokepixels.wordpress.com/

The specific post is: https://bespokepixels.wordpress.com/2020/06/23/lessons-learned-project-retrospective-on-dungeoncore/
