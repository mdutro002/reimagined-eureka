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

It took quite a bit of time, but I was able to get Auth working. There's still some debugging to do on that front, but nothing I'm terribly worried about. I'll need to add logout function to close the session, and make sure things aren't ending prematurely. But, noone can access routes they shouldn't have access to. I was about to begin on the create campaign methods, but I need sleep. 

What surprised me today was that I was able to get a significant bit of work done, even though I had some false starts. Things in the planning phase definitely weren't as fleshed out as they could have been. I'll work to make sure that tomorrow I have both sets of CRUD's working - for users and for campaigns. Right now I'm anticipating that the Update campaign method will be a bit tricky - I'll have to finally deal with complex objects in MongoDB and I'm not looking forward to it. But, ever forward!

**Sunday**
Oh man - got a lot of good stuff done today. There's still bugs to be worked through, but both campaigns and users are writing to the database, the user account can be edited fully, the campaigns are associated by an ownedBy field in the document, and the campaigns can be created no problem. Unfortunately, there's a pernicious bug with the array type that I had set up in campaign model, so I'm going to have to do more testing of that tomorrow. I'm going to try and get an earlier start tomorrow so I can hopefully get even more done. But I think I'm in good shape for the rest of the time leading up to Wednesday. My biggest bug outside of function that I'm dealing with right now is the fact that I haven't been able to apply styles to any of my pages using the partial. But that's a problem for late Monday/Tuesday

**Monday**
Current plan for today is to get all functionality debugged and ready for presentation day. The current remaining work includes Editing and Deleting campaigns and doing the last two major debugs - which is making sure styling works in the partials and making sure the array type for Campaigns is working.


Some big wins, and some annoying setbacks today. Had some bugs that were really difficult to work through, so I don't -technically- have edit working on campaigns, but I know I'll have that set for tomorrow. The good news is the data write to Atlas is working, and the CSS is rendering on all pages as it should. I'm positive by the end of tomorrow I'll be more than ready for presentations. 

**Tuesday**
Alright! Last push before this is ready!
Today's plan is to finalize styling, make sure the edit/delete campaign functions are working and finish styling everything. 

If I have any leftover time, I'll work on seeing what it would take to implement extra features.


> end of build diary
---

