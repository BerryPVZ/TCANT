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
        oSunShroom,
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
        oLGBOSS,
        oZombie,
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
    SunNum: 9990,

    LevelName: "Fog 10",
    LvlEName: 40,

    AudioArr: ["crazydaveshort1","crazydavelong1","crazydavelong2","crazydavelong3"],

    LargeWaveFlag: { 10: $("imgFlag1") },

    UserDefinedFlagFunc(a){
        oP.FlagNum === oP.FlagZombies &&
        oP.SetTimeoutWaterZombie(5,9,4,[oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3]);
    },

    StartGameMusic: "BossBattle",
},

{
    AZ: [
        [oZombie,9,9,[9]],
        [oLGBOSS, 1, 25, [25]]
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