The 05Scheduler application is a simple web browser application 
the screen shot of the application is located in the asset/css/image/save-file-option.png location 

the way this is works is first on the html file the structure for the page is set up so that you have divs and classes to be captured in the style.css and script.js files. 
A grid is created with rows and columns, each row represents and hour in the work day from 9 am - 5 pm.
The row is divided into 3 columns; the hour, the description field which has a textarea used for the 
guest's entries, and then a save button. 

the css file grabs classes of row which the js then evaluates, if it is in the past, it is gray, in the present is red, and in the future green. this is done while the page is loaded or refreshed. 

in js an event handler waits for input from the user. two main types of input are a task description being written to a textarea field or the save button. Once that input it placed onto the form the code 
will be able to handle the information 
When the guest enters data into the field it will only last until the page is refreshed or closed
however if the guest then presses the save button, that entry is put into local storage which is saved on their computer. 

room for growth would be to add an array to handle the buttons and description fields so that in the future a 
date can be associated with the description and time. Additional times would be wise because it would allow the user to have a life outside of work and many places have multiple or variable work shift start times. 
this page is more of a module for a future scheduler which would allow for more hours and ability to pull up past dates. If it were to be used exclusively for a work schedule then it would be good to include 
a time range the user can set up. Some workers have 1 hour lunches, others 1/2 hour. Some companies let you decide while you are at work. So allowing them to have a new color for the lunch and breaks will let 
it show times when the workers is not available from the supervisor. 
The other obvious feature I would add is the ability to delete a line....granted back spacing or deleting it and then saving the empty field is a form of deleting; however it would be more logical to the average user to have the ability to just remove the line from their schedule with the click of a button as well as 
in this more simple form if we allowed the user to just delete the page's worth of data so they can have a fresh page to use the next day. 
