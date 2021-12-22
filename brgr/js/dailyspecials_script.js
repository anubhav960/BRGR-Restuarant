//alert("hi");
window.onload = gonow;

function gonow(){
  //Get the Date
  var date = new Date();
  //Get the weekday
  dayWeek = date.getDay();
  var orderLink = document.getElementsByClassName("button");
  //Check each button and find one with the same value as todays weekday
  for( var link of orderLink){
    if( link.value == dayWeek){
      link.style.display = "inline";
    }
  }
}
