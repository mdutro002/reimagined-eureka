# dungeonCore
While it's probably also a genre of metal, in this case dungeonCore is a lightweight web app to manage DnD campaigns.
Use it to track how many sessions you have going, see what characters are in play, and view the maps you're using. 

***

### Features
-Create, View, Edit, and Delete your campaigns with impunity  
-Secured login  
-Show off your campaigns on the homepage - or not!  

***

### Build Notes
I'll be putting my ongoing notes on the build here.  
Here's the approximate build schedule I'll be adhering to:  

**Wednesday:** 
Starting off nice and easy with Heroku/Atlas configured and Deployed. Plotting course for development schedule, and creating this ReadMe  


**Thursday:**
Get all routes configured and tested, build seedroutes for users and campaigns, and get CRUD done if I can  


**Friday:**
This is has been set aside as a mental health day. I plan on certainly observing that and taking care of myself, but if I get too restless or anxious, it might actually be good for me to work on this. We'll see.  


**Saturday:**
By the time Saturday is done, I'd like to have any leftover CRUD work completed and Auth basics done  


**Sunday:**
Setting aside this for styling/bugs/catchup work - If I have everything working well, will work on stretch goals and additions.  


**Monday:**
At least have MVP done - any major bugs or issues should be addressed by this day  


**Tuesday:**
Prepare to present!  


---

**Thursday:**  
I had the idea to have characters be a complex object in the campaigns model, but I'm going to limit this to be an array for now. I am concerned about getting the mvp built in time if I throw in too many new issues, I'll spend my time on those instead of base functionality.   

If I have time later on in the project week, I'll come back and work on that. Progress today was much slower than I'd like. I basically got the routes set up and that's it. Not proud. :(

BUT. I think I needed a break, and I'm hoping to come at this tomorrow with some renewed focus, and hopefully get something more substantial done. Not to get all crossfit about it, but people are right - motivation is fleeting, and discipline is key.

**Friday** 
I ended up taking the whole day - bit of a late start to Saturday, but I expect that this was a big help for me.

**Saturday**
Heading into today still hoping to get all CRUD and Auth basics done. Honestly, should probably just aim for CRUD, but we'll see how it goes.

I was spending so much time wondering how to do complex objects for the characters, I completely missed the fact that I'm going to have to account for the fact that each campaign is 'owned' by a user, and needs to have that reflected in the data. At least it's just one "many-to-one" relationship I need to account for at first. I wish I had made better use of the past two days, but there's no time like the present, I guess.

Now that I've got items populating into the users category, I've got an idea of how to make sure I retain that many-to-one relationships between a user and their campaigns. But, I'm thinking now that instead of building the CRUDS and THEN going and building Auth, if I should build Auth and then finish Cruds. it feels like I'll have to shift around less in the end game. Especially since I'll be relying on those auth-session cookies to attribute the campaigns to the right user.