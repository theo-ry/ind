var json4day, json24hr, now, oneday, twodays, whatone, whattwo //global variables - all functions can read and store values inside

var dir = 0;

$(() => {
    Load4day(); //call function to load data****
    spriteAnim();
    $(".clickrestart").on("click", restart);

});

function Load4day() {
    $.ajax({
        url: "https://api.data.gov.sg/v1/environment/4-day-weather-forecast",
        dataType: "json",
    })
        .done(function(json) {
        json4day = json;
        console.log(json4day);
        LoadToday();
    })
        .fail(function() {
        console.log("error");
    });
} //loads api for 4day weather forecast

function LoadToday() {
    $.ajax({
        url: "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast",
        dataType: "json",
    })
        .done(function(json) {
        jsonToday = json;
        console.log(jsonToday);
        wherepage();
    })
        .fail(function() {
        console.log("error");
    });
} //loads api for 24hour weather forecast



function wherepage() {
    $("#wherepage").removeClass("hide"); //shows page

    $("#select").on("click", () => {
        $("#select").addClass("hide"); //hides page
        $("#where").removeClass("hide"); //shows page
        TweenMax.to("#where",0.1,{height: "200px"});
    }); //shows a "dropdown menu"

    $("#central").on("click", () => {loadDir(0)}); //central
    $("#north").on("click", () => {loadDir(1)}); //north
    $("#south").on("click", () => {loadDir(2)}); //south
    $("#east").on("click", () => {loadDir(3)}); //east
    $("#west").on("click", () => {loadDir(4)}); //west
    //leads to function loadDir
}

function whatpage1() {
    $("#wherepage").addClass("hide"); //hides page
    $("#whatpage1").removeClass("hide"); //shows page
    TweenMax.from("#whatpage1 .bar",0.3,{width: "100%"});
    TweenMax.to("#whatpage1 .bar",0.3,{width: "50%"});    
    $("#clickthin").on("click", () => {thickness("thin")});
    $("#clickthick").on("click", () => {thickness("thick")});
    //leads to function that assign a specific value to global var whatone
}

function whatpage2() {
    $("#whatpage1").addClass("hide"); //hides page
    $("#whatpage2").removeClass("hide"); //shows page
    TweenMax.from("#whatpage2 .bar",1,{width: "50%"});
    TweenMax.to("#whatpage2 .bar",1,{width: "100%"});     
    $("#clicklight").on("click", () => {color("light")});
    $("#clickdark").on("click",  () => {color("dark")});
    //leads to function that assign a specific value to global var whattwo
}

function loadDir(dir) {
    switch (dir) {
        case 0: //central
            now = jsonToday.items[0].periods[0].regions.central;
            break;
        case 1: //north
            now = jsonToday.items[0].periods[0].regions.north;
            break;
        case 2: //south
            now = jsonToday.items[0].periods[0].regions.south;
            break;
        case 3: //east
            now = jsonToday.items[0].periods[0].regions.east;
            break;
        case 4: //west
            now = jsonToday.items[0].periods[0].regions.west;
            break;
    }
    whatpage1();
} //assigns area specific value to global var now

function thickness(str){ 
    whatone = str;
    whatpage2();
}

function color(str){ 
    whattwo = str;
    processing();
}


function convert() {
    var nowcloud = now.search(/cloudy/i);
    if (nowcloud >= 0) {
        now = "cloudy";
    }

    var nowsun = now.search(/fair/i);
    if (nowsun >= 0) {
        now = "sunny";
    }

    var onecloud = oneday.search(/cloudy/i);
    if (onecloud >= 0) {
        oneday = "cloudy";
    }

    var onesun = oneday.search(/fair/i);
    if (onesun >= 0) {
        oneday = "sunny";
    }

    var twocloud = twodays.search(/cloudy/i);
    if (twocloud >= 0) {
        twodays = "cloudy";
    }

    var twosun = twodays.search(/fair/i);
    if (twosun >= 0) {
        twodays = "sunny";
    }
} //convert weather var into either sunny or cloudy

function processing() {
    $("#whatpage2").addClass("hide"); //hides page

    oneday = json4day.items[0].forecasts[0].forecast;
    twodays = json4day.items[0].forecasts[1].forecast;
    //assign values to global var oneday and twodays

    convert(); //converts the raw json values of global var now, oneday and twodays to more specific values that are used below to decide if page/div #good or #bad should be shown

    if ((whatone === "thin" && whattwo === "light" && (now === "sunny" || now === "cloudy") && (oneday === "sunny" || oneday === "cloudy")) ||
        (whatone === "thin" && whattwo === "dark" && now === "sunny" && oneday === "sunny") ||
        (whatone === "thick" && whattwo === "light" && (now === "sunny" || now === "cloudy") && (twodays === "sunny" || twodays === "cloudy")) ||
        (whatone === "thick" && whattwo === "dark" && now === "sunny" && twodays === "sunny")) {
        $("#good").removeClass("hide"); //shows page
    } else {
        $("#bad").removeClass("hide"); //shows page
        TweenMax.to(".sadcloud",1,{ transform: "scale(0.9)", repeat:-1, yoyo: true, ease: Power1.easeInOut});
    }

}

function restart() {
    TweenMax.to("#where",0.1,{height: "40px"});
    $("#bad, #good").addClass("hide"); //hides page
    $("#select").removeClass("hide"); //shows page
    $("#where").addClass("hide"); //hides page

    wherepage();
} // used to restart the app

function spriteAnim(){
    
    if (dir < 0){
        return; 
    }
    else if (dir == 0) {
        $(".clothes").css("background-position", "0 -160px");
        $(".happysun").css("background-position", "-459px -189px");
        }
    else {
        $(".clothes").css("background-position", "0 0");
        $(".happysun").css("background-position", "-459px -443px");
    }
    
    dir = !dir;
    
    window.setTimeout ( function() { spriteAnim(); }, 800);
    
}








//function ShowData(){
//    console.log("Show data");
//    console.log(json4day);
//    var tforecasts=json4day.items[0].forecasts.length;
//    console.log(tforecasts);
//    for(var i=0;i<tforecasts;i++){
//        var fc=json4day.items[0].forecasts[i].forecast;
//        var date=json4day.items[0].forecasts[i].date;
//        var html="<div data-index='"+i+"'>"+date+"<br>"+fc+"</div>";
//        $(".fourdays").append(html);
//    }
//    console.log(json24hr);
//    var nowforecast=json24hr.items[0].general.forecast;
//    var lt=json24hr.items[0].general.temperature.low;
//    var ht=json24hr.items[0].general.temperature.high;
//    var html="Today's weather:<br>"+nowforecast+"<br>low:"+lt+" high:"+ht;
//    $(".now").html(html);
//}
//
//
//$(".fourdays").on("click","div",function(e){
//    var j=$(this).data("index");
//    var date=json4day.items[0].forecasts[j].date;
//    var fc=json4day.items[0].forecasts[j].forecast;
//    var lt=json4day.items[0].forecasts[j].temperature.low;
//    var ht=json4day.items[0].forecasts[j].temperature.high;
//    var avg=(ht+lt)/2;
//    var html="<div>"+date+"<br>"+fc+"<br>high:"+ht+" low:"+lt+" avg:"+avg+"</div>";
//    $(".info").html(html);
//    $(".moreinfo").addClass("ani");
//});
//
//$(".close").on("click",function(e){
//    $(".moreinfo").removeClass("ani");
//});