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
 var todoText = [{}, {}, {}, {}, {}, {}, {}, {}, {}];



var loadItems = function() {
    var inputs = document.getElementsByTagName("textarea") 
    var hour =  new Date().toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        hour12: false 
    });

   var hour= parseInt(hour);
   
    for(var i=0; i<inputs.length; i++ ){
        var input = inputs[i];
        console.log(hour + " "+input.id);
        if (hour>input.id){
            input.classList.add("past");
        }
        if(hour<input.id){
            input.classList.add("future");
        }
        if(hour==input.id){
            input.classList.add("present");
        }
        
        
        
    }
    todoText = JSON.parse(localStorage.getItem("text"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        toDo: [],
        inProgress: [],
        inReview: [],
        done: []
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
    });
  };

  var saveItems = function() {
    localStorage.setItem("text", JSON.stringify(tasks));
  };

  loadItems();