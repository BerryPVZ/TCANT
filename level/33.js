oS.Init(
{
    PName: [
        oPeashooter,
        oSunFlower,
        oCherryBomb,
        oWallNut,
        oPotatoMine,
        oSnowPea,
        oChomper,
        oRepeater,
        oPuffShroom,
        oFumeShroom,
        oHypnoShroom,
        oScaredyShroom,
        oIceShroom,
        oDoomShroom,
        oLilyPad,
        oSquash,
        oThreepeater,
        oTangleKlep,
        oJalapeno,
        oSpikeweed,
        oTorchwood,
        oTallNut,
        oSeaShroom,
        oPlantern,
        oCactus,
    ],

    ZName: [
        oZombie,
        oZombie2,
        oZombie3,
        oConeheadZombie,
        oBucketheadZombie,
        oDuckyTubeZombie1,
        oDuckyTubeZombie2,
        oDuckyTubeZombie3,
        oJackinTheBoxZombie,
        oScreenDoorZombie,
        oFootballZombie,
        oZomboni,
        oBalloonZombie,
    ],

    PicArr: [
        "images/interface/background4.jpg",
        "images/interface/Dave.gif",
        "images/interface/Dave3.gif"
    ],

    backgroundImage: "images/interface/background4.jpg",

    HaveFog: 1,
    LF: [0,1,1,2,2,1,1],
    Coord: 2,

    CanSelectCard: 1,
    DKind: 0,
    SunNum: 50,

    LevelName: "Fog 3",
    LvlEName: 33,

    AudioArr: ["crazydaveshort1","crazydavelong1","crazydavelong2","crazydavelong3"],

    LargeWaveFlag: { 10: $("imgFlag1") },

    UserDefinedFlagFunc(a){
        oP.FlagNum === oP.FlagZombies &&
        oP.SetTimeoutWaterZombie(5,9,4,[oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3]);
    },

    StartGameMusic: "RigorMormist",

    LoadAccess: function(a){
        NewImg("dDave","images/interface/Dave.gif","left:0;top:81px",EDAll);
        NewEle("DivTeach","div",0,0,EDAll);

        (function(d){
            var b = arguments.callee;
            var c = $("DivTeach");

            switch(d){
                case 0:
                    PlaySound2("crazydaveshort1");
                    $("dDave").src = "images/interface/Dave3.gif";
                    oSym.addTask(1,function(){
                        $("dDave").src = "images/interface/Dave.gif";
                        c.onclick=function(){oSym.addTask(10,b,[1]);};
                    },[]);
                    innerText(c,"oh bother, here comes the bird zombies..");
                    break;

                case 1:
                    PlaySound2("crazydavelong"+Math.floor(1+Math.random()*3));
                    c.onclick=null;
                    $("dDave").src="images/interface/Dave3.gif";
                    oSym.addTask(2,function(){
                        $("dDave").src="images/interface/Dave.gif";
                        c.onclick=function(){oSym.addTask(10,b,[2]);};
                    },[]);
                    innerText(c,"Use Cactus to kill the birds.");
                    break;

                case 2:
                    $("dDave").src="images/interface/Dave2.gif";
                    ClearChild($("DivTeach"));
                    oSym.addTask(5,function(){
                        ClearChild($("dDave"));
                        a(0);
                    },[]);
            }
        })(0);
    }

},

{
    AZ: [
        [oZombie,3,1],
        [oZombie2,2,1],
        [oZombie3,2,1],
        [oConeheadZombie,2,1],
        [oBucketheadZombie,1,1],
        [oDuckyTubeZombie1,1,6,[6]],
        [oDuckyTubeZombie2,1,7],
        [oDuckyTubeZombie3,1,8],
        [oBalloonZombie,1,10,[10]]
    ],

    FlagNum: 10,

    FlagToSumNum: { 
        a1:[3,5,9], 
        a2:[1,2,3,15] 
    },

    FlagToMonitor: { 
        9:[ShowFinalWave,0] 
    },

    FlagToEnd: function(){
        NewImg("imgSF","images/interface/trophy.png",
            "left:43.5%;top:220px",EDAll,{
                onclick:function(){
                    SelectModal(0);
                    PlaySound2("winmusic");
                }
            }
        );
        NewImg("PointerUD","images/interface/PointerDown.gif",
            "top:185px;left:51%",EDAll);
    }
});