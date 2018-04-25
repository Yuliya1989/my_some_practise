var stage = new createjs.Stage(document.getElementById("logo"));

var spriteSheetLogo = new createjs.SpriteSheet({
"framerate":24,
"images":["images/lorem_animate.png"],
"frames":{
    "regX": 0,
    "count": 20,
    "width": 170,
    "regY": 0,
    "height": 96
},
"animations":{
"start": [0],
"over": [1, 19,"next",0.3],
"out": [0]
}
});

var log = new createjs.Sprite(spriteSheetLogo, "start");
stage.addChild(log);

TweenMax.ticker.addEventListener("tick", stage.update, stage);  //stage.update обновление (перерисовка) сцены;
TweenMax.ticker.fps(spriteSheetLogo.framerate);    //кадров в секунду
document.getElementById("logo").addEventListener("mouseover",funcOver)
function funcOver(){
log.gotoAndPlay("over")
}
document.getElementById("logo").addEventListener("mouseout",funcOut)
function funcOut(){
log.gotoAndPlay("out")
}

