function HypoPredict(){
    var home = document.getElementById('home').value;
    localStorage.setItem("home_name", home);
    var away = document.getElementById('away').value;
    localStorage.setItem("away_name", away);
    
    localStorage.setItem("state", "hypothetical");
    var c = 100;
    if (home == away && home != ""){
        document.getElementById('home').style.borderColor = "red";
        document.getElementById('away').style.borderColor = "red";
        document.getElementById('warning').innerHTML = "We currently DO NOT support same team hypothetical prediction";
    }
    else if (home != "" && away != ""){
        window.location.href='predictionpage.html';
    }else
    {
        if (home == "")
        {
            document.getElementById('home').style.borderColor = "red";
        }
        if (away == "")
        {
            document.getElementById('away').style.borderColor = "red";
        }
        document.getElementById('warning').innerHTML = "Please input a team name";
    }
}

function SearchTeam(){

  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/

      // console.log("x, y: ", x.innerHTML, y.innerHTML);
      // if (n != 2){
      //   x = parseInt(x);
      //   y = parseInt(y);
      // }

      if (dir == "asc") {

        if (n != 2){
          intx = parseInt(x.innerHTML);
          inty = parseInt(y.innerHTML);
          if (intx > inty) {
            shouldSwitch= true;
            break;
          }
        }
        else{
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        }
      } 

      else if (dir == "desc") {
        if (n != 2){
          intx = parseInt(x.innerHTML);
          inty = parseInt(y.innerHTML);
          if (intx < inty) {
            shouldSwitch= true;
            break;
          }      
        }

        else{
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

