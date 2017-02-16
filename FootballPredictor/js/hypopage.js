function HypoPredict(){
    var home = document.getElementById('home').value;
    var away = document.getElementById('away').value;
    console.log("Home is: ", home);
    console.log("Away is: ", away);
    if (home == away && home != ""){
        document.getElementById('home').style.borderColor = "red";
        document.getElementById('away').style.borderColor = "red";
        document.getElementById('warning').innerHTML = "We currently DO NOT support same team hypothetical prediction";
    }
    else if (home != "" && away != ""){
        preparePredictionPage(home, away);
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
  // console.log("home, away : " + home + "  "+ away);

function preparePredictionPage(home, away){
       
    
}