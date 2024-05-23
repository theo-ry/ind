var currSubtopic=0;

$('document').ready(function(){
    $(".btn_types").on("click",ShowTypes);
    $(".btn_uses").on("click",ShowUses);
    $(".btn_summits").on("click",ShowSummits);
    $(".btn_facts").on("click",ShowFacts);
    $("#btn_prev").on("click",PrevSubtopic);
    $("#btn_next").on("click",NextSubtopic);
    $("#btn_home").on("click",ShowMainTopic);
    $("#btn_menu").on("click",ShowMenu);

    //cancel popup
    $(".cancel").on("click",Cancel);

    //activate maintopic screen
    ShowMainTopic();
});



//show menu
function ShowMenu(){
    TweenMax.to("#menu",1,{height:"100%"});
    $("#menu").fadeIn(500);
    $("#btn_close").fadeIn();
    $("#btn_close").on("click",function(){
        TweenMax.to("#menu",3,{height:"0%"})
        $("#menu").fadeOut();
        $("#btn_close").hide();
    });
};



//prev and next subtopics
function NextSubtopic(){
    console.log(currSubtopic);
    if(currSubtopic==0){
        ShowTypes();
    }else if(currSubtopic==1){
        ShowUses();
    }else if(currSubtopic==2){
        ShowSummits();
    }else if(currSubtopic==3){
        ShowFacts();
    };
};

function PrevSubtopic(){
    console.log(currSubtopic);
    if(currSubtopic==4){
        ShowSummits();
    }else if(currSubtopic==3){
        ShowUses();
    }else if(currSubtopic==2){
        ShowTypes();
    }else if(currSubtopic==1){
        ShowMainTopic();
    };
};



//hide subtopics
function HideSubtopics(){
    $("#all>div").fadeOut(500);
};



//show maintopic
function ShowMainTopic(){
    $("#all>div").fadeOut(500);
    $("#maintopic").fadeIn(4000);
};



//show subtopic page
function ShowTypes(){
    HideSubtopics();
    currSubtopic=1;
    $("#types").fadeIn();

    //types options
    $("#fold").on("click",ShowFold);
    $("#block").on("click",ShowBlock);
    $("#dome").on("click",ShowDome);
    $("#volcanic").on("click",ShowVolcanic);
    $("#plateau").on("click",ShowPlateau);
};

function ShowUses(){
    HideSubtopics();
    currSubtopic=2;
    $("#uses").fadeIn();

    //uses options
    $("#tourism").on("click",ShowTourism);
    $("#farming").on("click",ShowFarming);
    $("#civilisation").on("click",ShowCivilisation);
    $("#companies").on("click",ShowCompanies);
};

function ShowSummits(){
    HideSubtopics();
    currSubtopic=3;
    $("#summits").fadeIn();

    //summits options
    $("#asia").on("click",ShowAsia);
    $("#south").on("click",ShowSouth);
    $("#north").on("click",ShowNorth);
    $("#europe").on("click",ShowEurope);
    $("#antartica").on("click",ShowAntartica);
    $("#africa").on("click",ShowAfrica);
    $("#oceania").on("click",ShowOceania);
};

function ShowFacts(){
    HideSubtopics();
    currSubtopic=4;
    $("#facts").fadeIn();

    //facts options
    $("#fact1").on("click",ShowF1);
    $("#fact2").on("click",ShowF2);
    $("#fact3").on("click",ShowF3);
    $("#fact4").on("click",ShowF4);
    $("#fact5").on("click",ShowF5);
    $("#fact6").on("click",ShowF6);
};



//show types info
function ShowFold(){
    Cancel();
    $("#fold-info").fadeIn();
    replayF();
};

function ShowBlock(){
    Cancel();
    $("#block-info").fadeIn();
    replayB();
};

function ShowDome(){
    Cancel();
    $("#dome-info").fadeIn();
    replayD();
};

function ShowVolcanic(){
    Cancel();
    $("#volcanic-info").fadeIn();
    replayV();
};

function ShowPlateau(){
    Cancel();
    $("#plateau-info").fadeIn();
    replayP();
};



//show uses info
function ShowTourism(){
    Cancel();
    $("#tourism-info").fadeIn();
};

function ShowFarming(){
    Cancel();
    $("#farming-info").fadeIn();
};

function ShowCivilisation(){
    Cancel();
    $("#civilisation-info").fadeIn();
};

function ShowCompanies(){
    Cancel();
    $("#companies-info").fadeIn();
};



//show summits info
function ShowAsia(){
    Cancel();
    $("#asia-info").fadeIn();
};

function ShowSouth(){
    Cancel();
    $("#south-info").fadeIn();
};

function ShowNorth(){
    Cancel();
    $("#north-info").fadeIn();
};

function ShowEurope(){
    Cancel();
    $("#europe-info").fadeIn();
};

function ShowAntartica(){
    Cancel();
    $("#antartica-info").fadeIn();
};

function ShowAfrica(){
    Cancel();
    $("#africa-info").fadeIn();
};

function ShowOceania(){
    Cancel();
    $("#oceania-info").fadeIn();
};



//show facts info
function ShowF1(){
    Cancel();
    $("#f1-info").fadeIn();
};

function ShowF2(){
    Cancel();
    $("#f2-info").fadeIn();
};

function ShowF3(){
    Cancel();
    $("#f3-info").fadeIn();
};

function ShowF4(){
    Cancel();
    $("#f4-info").fadeIn();
};

function ShowF5(){
    Cancel();
    $("#f5-info").fadeIn();
};

function ShowF6(){
    Cancel();
    $("#f6-info").fadeIn();
};



//cancel popup
function Cancel(){
    $(".popup>div").fadeOut();
};


///animations 

//fold
function replayF(){
    TweenMax.to("#f1",1,{visibility:"visible"});
    TweenMax.to("#f1",1,{delay: 1, visibility:"hidden"});
    TweenMax.to("#f2",1,{delay: 1, visibility:"visible"});
    TweenMax.to("#f2",1,{delay: 2, visibility:"hidden"});
    TweenMax.to("#f3",1,{delay: 2, visibility:"visible"});
    TweenMax.to("#f3",1,{delay: 3, visibility:"hidden"});
    TweenMax.to("#f4",1,{delay: 3, visibility:"visible"});
    TweenMax.to("#f4",1,{delay: 4, visibility:"hidden"});

    TweenMax.delayedCall(4, replayF);
};

//block
function replayB(){
    TweenMax.to("#b1",1,{visibility:"visible"});
    TweenMax.to("#b1",1,{delay: 1, visibility:"hidden"});
    TweenMax.to("#b2",1,{delay: 1, visibility:"visible"});
    TweenMax.to("#b2",1,{delay: 2, visibility:"hidden"});
    TweenMax.to("#b3",1,{delay: 2, visibility:"visible"});
    TweenMax.to("#b3",1,{delay: 3, visibility:"hidden"});
    TweenMax.to("#b4",1,{delay: 3, visibility:"visible"});
    TweenMax.to("#b4",1,{delay: 4, visibility:"hidden"});

    TweenMax.delayedCall(4, replayB);
};

//dome
function replayD(){
    TweenMax.to("#d1",1,{visibility:"visible"});
    TweenMax.to("#d1",1,{delay: 1, visibility:"hidden"});
    TweenMax.to("#d2",1,{delay: 1, visibility:"visible"});
    TweenMax.to("#d2",1,{delay: 2, visibility:"hidden"});
    TweenMax.to("#d3",1,{delay: 2, visibility:"visible"});
    TweenMax.to("#d3",1,{delay: 3, visibility:"hidden"});
    TweenMax.to("#d4",1,{delay: 3, visibility:"visible"});
    TweenMax.to("#d4",1,{delay: 4, visibility:"hidden"});

    TweenMax.delayedCall(4, replayD);
};

//volcanic
function replayV(){
    TweenMax.to("#v1",1,{visibility:"visible"});
    TweenMax.to("#v1",1,{delay: 1, visibility:"hidden"});
    TweenMax.to("#v2",1,{delay: 1, visibility:"visible"});
    TweenMax.to("#v2",1,{delay: 2, visibility:"hidden"});
    TweenMax.to("#v3",1,{delay: 2, visibility:"visible"});
    TweenMax.to("#v3",1,{delay: 3, visibility:"hidden"});
    TweenMax.to("#v4",1,{delay: 3, visibility:"visible"});
    TweenMax.to("#v4",1,{delay: 4, visibility:"hidden"});
    TweenMax.to("#v5",1,{delay: 4, visibility:"visible"});
    TweenMax.to("#v5",1,{delay: 5, visibility:"hidden"});
    TweenMax.to("#v6",1,{delay: 5, visibility:"visible"});
    TweenMax.to("#v6",1,{delay: 6, visibility:"hidden"});

    TweenMax.delayedCall(4, replayV);
};

//plateau
function replayP(){
    TweenMax.to("#p1",1,{visibility:"visible"});
    TweenMax.to("#p1",1,{delay: 1, visibility:"hidden"});
    TweenMax.to("#p2",1,{delay: 1, visibility:"visible"});
    TweenMax.to("#p2",1,{delay: 2, visibility:"hidden"});
    TweenMax.to("#p3",1,{delay: 2, visibility:"visible"});
    TweenMax.to("#p3",1,{delay: 3, visibility:"hidden"});
    TweenMax.to("#p4",1,{delay: 3, visibility:"visible"});
    TweenMax.to("#p4",1,{delay: 4, visibility:"hidden"});

    TweenMax.delayedCall(4, replayP);
};