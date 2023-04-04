const rect = document.getElementById("repulotest");
const poly = document.getElementById("repuloszarny");
const repuloHitbox = document.getElementById("repcsihitbox");
let dy = 0;
let canJump = true;
var magasság = 0;
var Torony = document.getElementById("TwinTowers")
//var toronyMagasság = document.getElementById("tower").getAttribute('height');
//var toronyX = document.getElementById("tower").getClientRects("");

// console.log(toronyMagasság)
// console.log(ToronyX)
function moveRect() {
  rect.setAttribute('transform', `translate(-30 ${dy}), scale(0.5,0.5)`);
  poly.setAttribute('transform', `translate(-35 ${dy}), scale(0.5,0.5)`);
  repuloHitbox.setAttribute('transform', `translate(-30 ${dy})`);
}

function moveUp() {
  if (canJump) {
    dy += -15;
     
  }
}

function fall() {
  if(dy <10)
    {
     // console.log("ÁU")
      canJump = false;  
    }
    else
    {
      canJump = true
    }

  if (dy < 85) {
    dy += 2;
    
  }
   else {
    dy = 85 ;
    canJump = true;
    
  }
  //console.log(`Az Y koordináta:${dy}`)
  magasság = (170-dy-85)*10

  document.getElementById("meter").innerHTML = magasság + "m"
  moveRect();
  
}

document.addEventListener('keyup', (event) => {
  if (event.code == 'Space') {
    moveUp();
    //console.log("Ugrás!")
  }
});
function TowerMovement()
  {


  }
function TwinTowers()
  {
     // a torony elhelyezése: y = 100-magasság
     // mozgatás x koordináta csökkentése -1el, intervál minnél alacsonyabb annál smoothabb!
     // a torony magassága maximum 100 lehet ez a pálya mérete!
     //ha a torony x(-50) akkor a pontszám 1-el növekszik illet x = 130


  }
setInterval(fall, 100 );
