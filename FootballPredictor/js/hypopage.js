window.onload=function(){
    
}

function IsEmpty(){

  var home = document.getElementById('home').value;
  var away = document.getElementById('away').value;

  if (home == away && home != "" && away != ""){

  	document.getElementById('home').style.borderColor = "red";
  	document.getElementById('away').style.borderColor = "red";
  	document.getElementById('warning').innerHTML = "Currently we DO NOT support same team hypothetical prediction";
  }
  else if (home != "" && away != "")
  	window.location.href='predictionpage.html';
  else{
  	if (home == "")
  		document.getElementById('home').style.borderColor = "red";
  	if (away == "")
  		document.getElementById('away').style.borderColor = "red";

  	document.getElementById('warning').innerHTML = "Please input a team name";
  }
  // console.log("home, away : " + home + "  "+ away);
}