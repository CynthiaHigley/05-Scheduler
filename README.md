The 05-Scheduler application is a simple web browser application 
the screen shot of the application is located in the asset/css/image/save-file-option.png location 

The 05Scheduler application is a simple web browser application 
the screen shot of the application is located in the asset/css/image/screenShot.png location 

This is an application which allows a user to enter their daily work schedule between 9 am - 5 pm 

index.html 
uses and references bootstrap, fontawesome, and fonts google apis 
as well as references the style.css location 

the header is created with jumbotron
a container is used with rows dipicting the hour, description and a save button 
the save button allows the user to save their task to their local memory 

it closes referencing jquery and cloudflare 
it references the java/script.js within the app structure 

the style.css 
creates the structure of the scheduler 
if the time has not yet occurred the task line textarea is green, 
if it is currently happening then the task line textarea is red, 
and if it is in the past the task line textarea is gray. 

the script.js 
an array of workhours is set up to accomodate the hours 9 am - 5 pm 

for each hour in the array the setRowColors is called 
this determines the date, hours and compares them with the 
schedule to determine the color of the textarea on the document 
based upon the hours of schedule for the task it is compared with 
the current time to deem the element as either past, present or future 
which then style.css can update to the proper color on the scheduler. 

each task is given a separate bottom for each hour so that the 
user can enter task for that time in the textarea 
buttonEvents() is called which will allow that data 
to be then saved to the local storage on the user's machine

buttonEvents(); is then called 
this insites the saveSchedule using a parameter of btnDataAttr 
where the local storage saving actually occurs. 

an onLoad() function 
is set up for when the user loads the form so that the values from local storage can be displayed in the 
textarea 

this function onLoad() is called 






 
