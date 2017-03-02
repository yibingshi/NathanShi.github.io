




var teamColors = {"":'rgb(199,51,54)',"Arsenal":'rgb(159,0,19)',"Burnley":'rgb(199,51,105)',"Chelsea FC":'rgb(15,29,123)',"Crystal Palace":'rgb(75,124,216)',"Everton":'rgb(74,101,181)',"Hull City":'rgb(228,139,47)',"Leicester City":'rgb(208,166,57)',"Liverpool":'rgb(255,109,109)',"Manchester City":'rgb(184,223,245)',"Manchester United":'rgb(218,0,0)',"Middlesbrough":'rgb(190,35,30)',"Southampton":'rgb(139,26,24)',"Stoke City":'rgb(217,33,43)',"Sunderland AFC":'rgb(166,129,35)',"Swansea City":'rgb(37,37,37)',"Tottenham Hotspur":'rgb(4,18,85)',"Watford":'rgb(255,197,0)',"West Bromwich Albion":'rgb(9,17,83)',"West Ham United":'rgb(94,33,59)'};

//TottenhamHotspur = rgb(251,251,251);
//"Swansea City":'rgb(251,251,251)'
//#252525
var transparentTeamColors = {"AFC Bournemouth":'rgba(199,51,54,.1)',"Arsenal":'rgba(159,0,19,.1)',"Burnley":'rgba(199,51,105,.1)',"Chelsea FC":'rgba(15,29,123,.2)',"Crystal Palace":'rgba(75,124,216,.2)',"Everton":'rgba(74,101,181,.2)',"Hull City":'rgba(228,139,47,.2)',"Leicester City":'rgba(208,166,57,.2)',"Liverpool":'rgba(255,109,109,.1)',"Manchester City":'rgba(184,223,245,.4)',"Manchester United":'rgba(218,0,0,.1)',"Middlesbrough":'rgba(190,35,30,.1)',"Southampton":'rgba(139,26,24,.2)',"Stoke City":'rgba(217,33,43,.2)',"Sunderland AFC":'rgba(166,129,35,.2)',"Swansea City":'rgba(37,37,37,.2)',"Tottenham Hotspur":'rgba(4,18,85,.2)',"Watford":'rgba(255,197,0,.2)',"West Bromwich Albion":'rgba(9,17,83,.2)',"West Ham United":'rgba(94,33,59,.2)'};


window.onload=function(){
    var teamName = window.location.hash.substr(1).replace(/%20/g, " ");
    var team_name_formatted = teamName.toLowerCase().replace(/ /g, "");

    document.getElementById("team_logo").src = "img/Team_Logos/"+team_name_formatted+".png";
    document.getElementById("team_title").innerHTML = teamName;
    document.getElementById("team_upcoming1").innerHTML = teamName;
    document.getElementById("team_upcoming2").innerHTML = teamName;
    document.getElementById("team_upcoming3").innerHTML = teamName;
    document.getElementById("team_upcoming1_img").src = "img/Team_Logos/"+team_name_formatted+".png";
    document.getElementById("team_upcoming2_img").src = "img/Team_Logos/"+team_name_formatted+".png";
    document.getElementById("team_upcoming3_img").src = "img/Team_Logos/"+team_name_formatted+".png";
    document.getElementById("previousGame1").innerHTML = teamName + " vs. Watford";
    document.getElementById("previousGame2").innerHTML = "Swansea City vs. " +teamName;
    document.getElementById("previousGame3").innerHTML = teamName + " vs. AFC Bournemouth";
    document.getElementById("home1").value = teamName;

    if (teamName == "Middlesbrough"){
        document.getElementById("team_title").style = "font-size: 6em; padding-top:0.6em; margin-left: -0.5em;";

    }

    if (teamName == "AFC Bournemouth"){
        document.getElementById("team_title").style = "font-size: 6em; padding-top:0.1em; margin-left: -0.5em;";

    }

    if (teamName == "Southampton"){
        document.getElementById("team_title").style = "font-size: 6em; padding-top:0.6em; margin-left: -0.5em;";

    }

    if (teamName == "West Bromwich Albion"){
        document.getElementById("team_title").style = "font-size: 6em; margin-left: -0.5em;";

    }

    
    team_title
    console.log(teamName);
    console.log(team_name_formatted);


    
    


}

