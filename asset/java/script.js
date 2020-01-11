
var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

workHours.forEach(setRowColors);

function setRowColors(el, i) {

  var date = new Date();


  var hours = date.getHours();

  var element = document.getElementsByClassName(`${el}`);



  if (el < hours) {

    element[0].classList.add("past");

  } else if (el === hours) {

    element[0].classList.add("present");
  } else {

    element[0].classList.add("future");
  }


}
function buttonEvents() {
  var btnClicks = document.getElementsByClassName(`savBtn`);

  for (var i = 0;  i < btnClicks.length; i++) {
    btnClicks[i].addEventListener("click", function(event){
      
      var btnDataAttr = event.target.parentNode.getAttribute("data-index-number");
      saveSchedule(btnDataAttr);

    });
    
    }
  }

buttonEvents();
 


function saveSchedule(btnDataAttr) {

  
  var schedDescription = document.getElementById(btnDataAttr).value;

  localStorage.setItem(btnDataAttr, schedDescription);


}
function onLoad(){
  for (s=0; s <= workHours.length; s ++ ){
    var elId = "btn" + workHours[s];

    
    document.getElementById(elId).value = localStorage.getItem(elId);

  }
  
}
onLoad();


