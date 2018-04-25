var pic=document.getElementById("picture");
var buttons=document.querySelectorAll(".buttons");
var blocks=document.querySelectorAll(".blocks");
var lo=document.getElementById("logo");

TweenLite.from(pic,4,{alpha:0});
TweenLite.from(buttons,1,{scale:0.05,alpha:0});

var nav=document.getElementById("navigation");
nav.addEventListener("mouseover",funcOver);
nav.addEventListener("mouseout",funcOut);
nav.addEventListener("click",funcClick);

function funcOver(e) {
if (e.target!==e.currentTarget&&e.target.style.opacity==1){
TweenLite.to(e.target,0.2,{boxShadow:"0 0 13px 1px #00d0fd"});
}
};

function funcOut(e) {
if (e.target!==e.currentTarget){
TweenLite.to(e.target,0.5,{boxShadow:"none"});
}
}; 

function funcClick(e) {
if (e.target!==e.currentTarget){
var block=document.querySelectorAll("#block"+e.target.id.substr(6,1))[0];
TweenLite.to(e.target,0.2,{css:{opacity:0.6}});
TweenLite.to(buttons,0.7,{css:{top:"-70px",scale:0.8},
onComplete: function() {
TweenLite.to(block,0.3,{css:{display: "block", height: "250px",top: "350px",opacity: 1}});
}
});
}
if (e.target!==e.currentTarget&&e.target.style.top==="-70px"&&e.target.style.opacity==1){
TweenLite.to(buttons,0.3,{css:{opacity:1}});
TweenLite.to(e.target,0.3,{css:{opacity:0.6}});
TweenLite.to(blocks,0.3,{css:{display: "none", height:"0px", top: "450px", opacity: 0},
onComplete: function() {
TweenLite.to(block,0.3,{css:{display: "block", height: "250px",top: "350px",opacity: 1}});
}
});
};
};

lo.addEventListener("click",funcClickLo);
function funcClickLo(){
TweenLite.to(blocks,0.3,{css:{display: "none", height:"0px", top: "450px", opacity: 0}});
TweenLite.to(buttons,0.7,{css:{top:"0px",scale:1,opacity:1}});
};