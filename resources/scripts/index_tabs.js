function tabControl(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablink;


  // Get all elements with class="tabContents" and hide them
  tabcontent = document.getElementsByClassName("tabContents");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablink = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";


  var y_axis;
  y_axis = document.documentElement.clientHeight;   //returns the heigth of the screen
  window.scrollTo({         //to scroll to the size of the screen
    top: y_axis,
    behavior: "smooth"
  });
}


//Default view of the tab
document.getElementById("defaultOpenTab").click();




//For hiding and bringing forward tabs
document.getElementById("top_tabs").style.top = "-20vh";
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var y_axis;
  y_axis = document.documentElement.clientHeight;
  if (document.body.scrollTop > y_axis/1.5 || document.documentElement.scrollTop > y_axis/1.5) {
    document.getElementById("top_tabs").style.top = "0";
  } else {
    document.getElementById("top_tabs").style.top = "-20vh";
  }
}

