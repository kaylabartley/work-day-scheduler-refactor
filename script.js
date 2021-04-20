/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

//$("#currentDay").html(date);

var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
var prnDt =  new Date().toLocaleTimeString('en-us', options);

$("#currentDay").html(prnDt);
 var toDoText = ['', '', '', '','', '', '', '', ''];


var loadItems = function() {
    var inputs = document.getElementsByTagName("textarea") 
    var hour =  new Date().toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        hour12: false 
    });

   var hour= parseInt(hour);

    for(var i=0; i<inputs.length; i++ ){
        var input = inputs[i];
        var inp = input.id.split("-")[0];
        console.log(hour + " "+inp);
        if (hour>inp){
            input.classList.add("past");
            console.log("past");
        }
        else if(hour<inp){
            input.classList.add("future");
            console.log("future");
        }
        else if(hour==inp){
            input.classList.add("present");
            console.log("present");
        }
        
        
        
    }
    toDoText = JSON.parse(localStorage.getItem("text"));
    console.log(toDoText);
 // 8 arrays
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!toDoText) {
        for(var a=0; a<9; i++){
            toDoText[i]='';

        }
    }
    else{
        for(var h=0; h<9; h++){
            var z = h+9;
            document.getElementById(z.toString()+"-t").value=toDoText[h];
        }
    }
  };

  var saveItems = function() {
    
    localStorage.setItem("text", JSON.stringify(tasks));
  };

  $(".saveBtn").click(function(){
        var id = this.id;
        console.log(id);
        var input= document.getElementById(id+"-t").value;
        console.log(input);
        toDoText[id-9]=input;
        console.log(toDoText);
        localStorage.setItem("text", JSON.stringify(toDoText));
  })

  /*var names = [];
  names[0] = prompt("New member name?");
  localStorage.setItem("names", JSON.stringify(names));
  
  //...
  var storedNames = JSON.parse(localStorage.getItem("names"));
  */
  loadItems();