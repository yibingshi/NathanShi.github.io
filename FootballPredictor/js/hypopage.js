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
var old_n = 0;

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
    
   for (var i=0; i<21; i++){
    var btn = table.rows[i].cells[old_n];
    btn.style.fontWeight = 'normal';
  }

  for (var i=0; i<21; i++){
    var btn = table.rows[i].cells[n];
    btn.style.fontWeight = 'bold';
  }
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
  old_n = n;
}

var predictNumber = 1;
var home_predict_id = new Array ("home1");
var away_predict_id = new Array ("away1");

$('#addDom').click(function() {

        predictNumber += 1;

        var structure = $('<div id="warning" style="color:red;"></div><input type="userinput" list="pasta" onClick="this.select();" value="Chelsea FC" placeholder="Home Team" id="home" style="margin-right:0.4em;">&emsp;&emsp;&emsp;VS&emsp;&emsp;&emsp;<input type="userinput" list="pasta" onClick="this.select();" value="" placeholder="Away Team" id="away" style="margin-left:0.4em;"></div>');
        $('#away1').after(structure);

        var away_abcElements = document.getElementById('away');
        var home_abcElements = document.getElementById('home');
        away_abcElements.id = 'away'+ predictNumber.toString();
        home_abcElements.id = 'home'+ predictNumber.toString();

        away_predict_id.push(away_abcElements.id);
        home_predict_id.push(home_abcElements.id);

         
    });


function MultiHypoPredict(){


  for (var i = 0; i<away_predict_id.length;i++){

  var home = home_predict_id[i];
  var away = away_predict_id[i];

  // console.log("home: ", home);
  // console.log("away: ", away);

  var new_home = document.getElementById(home).value;
  var new_away = document.getElementById(away).value;

  // console.log("new_home: ", new_home);
  // console.log("new_away: ", new_away);

  if (new_home == new_away && new_home != ""){
        document.getElementById(home).style.borderColor = "red";
        document.getElementById(away).style.borderColor = "red";
        document.getElementById('warning').innerHTML = "We currently DO NOT support same team hypothetical prediction";
    }
    else if (new_home != "" && new_away != ""){
        localStorage.setItem("home_name", new_home);
        localStorage.setItem("away_name", new_away);
        // alert("Multi-Hypo Predict i==" + i + "is calling open prediciton page");
        window.open('predictionpage.html', '_blank');
//         wait(1000);
        // alert("Multi-Hypo Predict i==" + i + "is done calling open prediciton page");
    }
    else
    {
        if (new_home == "")
        {
            document.getElementById(home).style.borderColor = "red";
        }
        if (new_away == "")
        {
            document.getElementById(away).style.borderColor = "red";
        }
        document.getElementById('warning').innerHTML = "Please input a team name";
    }
  }

}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
