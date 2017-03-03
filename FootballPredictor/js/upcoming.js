var abbrevKey = {"AFC Bournemouth":"AFCB", "Arsenal":"ARS", "Burnley":"BUR", "Chelsea FC":"CHE", "Crystal Palace":"CRY", "Everton":"EVE", "Hull City":"HUL", "Leicester City":"LEI", "Liverpool":"LIV","Manchester City":"MANC", "Manchester United":"MANU", "Middlesbrough":"MID", "Southampton":"SOU", "Stoke City": "STO", "Sunderland AFC":"SUN", "Swansea City": "SWA", "Tottenham Hotspur":"TOT", "Watford":"WAT", "West Bromwich Albion":"WBA", "West Ham United": "WHU"}

function upcomingPredict(upcomingHome,upcomingAway){
    //localStorage.setItem("upcoming", true);
    //var home = document.getElementById('home').value;
    //var away = document.getElementById('away').value;
    
    window.location.href='predictionpage.html#'+abbrevKey[upcomingHome]+"#"+abbrevKey[upcomingAway];
//    localStorage.setItem("home_name", upcomingHome);
//    localStorage.setItem("away_name", upcomingAway);
//    localStorage.setItem("state", "upcoming");
    
    
    /*var c = 100;
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
    }*/
}
