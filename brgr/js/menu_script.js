//default open
window.onload = function(){
  document.getElementById('defaultOpen').click();
}
function openTab(evt, itemName) {
  
  // Declare all variables
  var i, tabContent, tabLinks;

  // Get all elements with class="tabcontent" and hide them
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tabLinks = document.getElementsByClassName("tabLinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(itemName).style.display = "grid";
  evt.currentTarget.className += " active";
  
}
