let navopen = true

function NavMenu() {
    if (!navopen) {
      //close
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      navopen = true
    }else {
      //open
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      navopen = false
    }
}