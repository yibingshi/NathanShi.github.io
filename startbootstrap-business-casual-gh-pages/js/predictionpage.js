var displayoptions;
var comparisontables;
var descriptions;
var statGroupings;
window.onload=function(){
    //Initialize global variables;
    displayoptions = document.getElementById("venueoroverall").getElementsByTagName("li");  //Either OVERALL or VENUE
    comparisontables = document.getElementsByClassName("comparisontable");                  //keystats tables; either  OVERALL or VENUE
    descriptions = document.getElementsByClassName("descriptions_OverallVenue");            //Descriptions; either OVERALL or VENUE
    var tableTitles = document.getElementsByClassName("tableTitle");
    statGroupings = getGroupings(tableTitles);                                              //Every Table Title
    
    //Initially:
    //We want our active selectors to be: Overall AND Quick Stats;
    statGroupings[0].classList.add("optionActivated"); //Add OptionActivated to Span elt. of Quick Stats
    displayoptions[0].getElementsByTagName("a")[0].classList.add("optionActivated");
    
    //Chart:
    Chart.defaults.global.hover.mode = 'nearest';
    const CHARTT = $("#lineChart_Total");
    const CHARTVS = $("#lineChart_VS");
    let lineChartT = new Chart(CHARTT, {
        type:'line',
        data: {
            labels: ["ASMpM",
                     "ASFpM",
                     "AGM",
                     "APPG",
                     "P5ME",
                     "ACWpP",
                     "ACCpOP",
                     "AOApP",
                     "AOFpOP",
                     "AFCpP",
                     "AFCpOP",
                     "AYCpOP",
                     "AYCforOpP",
                     "ARCpOP",
                     "ARCforOpP",
                     "ASTpP",
                     "ASCpOP",
                     "AGSpSOT",
                     "AGCpOSOT"],
            datasets: [
                {
                    label: "Watford",
                    borderWidth: 1,
                    backgroundColor: "rgba(255, 206, 86, 0.2)",
                    borderColor: "rgba(255, 206, 86, 1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(255, 206, 86, 1)",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 5,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: [3.5714, 1.1429, -.8571, .5714, .2, .114, .112, .03, .022, .0314, .02219, .0236, .0336, 0, 0.002242, 1.681102, 1.99327, 0.23, 0.308, 0.5714, 0.359],
                },
                {
                    label: "Chelsea",
                    borderWidth: 1,
                    backgroundColor: "rgba(36, 36, 206, 0.2)",
                    borderColor: "rgba(36, 36, 206, 1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(36, 36, 206, 1)",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(36, 36, 206, 1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 5,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: [3.5714, 3.5714, -.8571, .28571, .4, .149, .116, .026, .0915, .231, .352, .0409, .0458, .0024, 0, 1.83, 2.37, 0.257, 0.3645, 0.1429, 0.286],
                }
            ]
        },
        options: {
            hover: {
                mode:'nearest'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    let lineChartVS = new Chart(CHARTVS, {
        type:'line',
        data: {
            labels: ["ASMpM",
                     "ASFpM",
                     "AGM",
                     "APPG",
                     "P5ME",
                     "ACWpP",
                     "ACCpOP",
                     "AOApP",
                     "AOFpOP",
                     "AFCpP",
                     "AFCpOP",
                     "AYCpOP",
                     "AYCforOpP",
                     "ARCpOP",
                     "ARCforOpP",
                     "ASTpP",
                     "ASCpOP",
                     "AGSpSOT",
                     "AGCpOSOT"],
            datasets: [
                {
                    label: "Watford",
                    borderWidth: 1,
                    backgroundColor: "rgba(255, 206, 86, 0.2)",
                    borderColor: "rgba(255, 206, 86, 1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(255, 206, 86, 1)",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 5,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: [8.33333, 2.6666, -.6666, 1, 7, .113, .11351, .026, .027, .296, .2, .0174, .027, 0, 0, 0.861, 0.649, 0.24, 0.325, 0.625, 0.5385],
                },
                {
                    label: "Chelsea",
                    borderWidth: 1,
                    backgroundColor: "rgba(36, 36, 206, 0.2)",
                    borderColor: "rgba(36, 36, 206, 1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(36, 36, 206, 1)",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(36, 36, 206, 1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 5,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: [8.33333, 8.3333, -.6666, 0.3333, 0, 0.1353, 0.1154, 0.04117, 0.0769, 0.2411, 0.3153, 0.041177, 0.038462, 0.00588, 0, 0.4941, 0.9692, 0.25, 0.3333, 0.28571, 0.35714]
                }
            ]
        },
        options: {
            hover: {
                mode:'nearest'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    
    updatePage();
    
    for (var i = 0; i < displayoptions.length; i++) {
        displayoptions[i].onclick = function() {
            $("#venueoroverall li a.optionActivated")[0].classList.remove("optionActivated");
            $('a',this)[0].classList.add("optionActivated");
            updatePage();
            return false;
        }
    }
    for(var i = 0; i<statGroupings.length; i++){
        statGroupings[i].onclick=function() {
            if($(this)[0].classList.contains("optionActivated")){
                $("img", this)[0].src="img/collapsible_div_arrow_left.png";
                $(this)[0].classList.remove("optionActivated");    
            }
            else{
                if($(".tableTitle span.optionActivated")[0]){
                    $(".tableTitle span.optionActivated img")[0].src = "img/collapsible_div_arrow_left.png";
                    $(".tableTitle span.optionActivated")[0].classList.remove("optionActivated");
                }
                $("img", this)[0].src="img/collapsible_div_arrow_down.png";   
                $(this)[0].classList.add("optionActivated");   
            }
            updatePage();
            return false;
        }
    }
}

function getGroupings(tableTitles){
    ret = []
    for (var i =0; i<tableTitles.length; i++)
        {
            ret.push(tableTitles[i].getElementsByTagName('span')[0]);
        }
    return ret;
}

function updatePage(){
    var Overall_VS_index = 0;
    if($("#venueoroverall li a.optionActivated")[0].text=="Venue Specific"){
        Overall_VS_index=1;
    }
    descriptions[Overall_VS_index].style.display="block";
    descriptions[(Overall_VS_index+1)%2].style.display="none";
    
    for(var i=0; i<comparisontables.length; i++)
    {
        comparisontables[i].style.display="none";
    }
    
    if($('.tableTitle span.optionActivated h3')[0])
    {
        switch($('.tableTitle span.optionActivated h3')[0].innerHTML)
        {
            case("Quick Stats:"):
                comparisontables[Overall_VS_index].style.display="table";
                break;
            case("Graphical Comparison:"):
                comparisontables[2+Overall_VS_index].style.display="table";
                break;
            case("Tabular Comparison:"):
                comparisontables[4+Overall_VS_index].style.display="table";
                break;
        }
    }
    return false;    
}