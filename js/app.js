const rect = document.getElementById("repulotest");
const poly = document.getElementById("repuloszarny");
const repuloHitbox = document.getElementById("repcsihitbox");
let dy = 0;
let canJump = true;
var magasság = 0;
var Torony = document.getElementById("tower")
var Torony2 = document.getElementById("towerUp")
var end =false;
var mozgas;
var toronymovement;
var robbanas = document.getElementById("boom")


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
  if (dy < 10) {

    canJump = false;
  }
  else {
    canJump = true
  }

  if (dy < 85) {
    dy += 30 *valtozo2;

  }
  else {
    dy = 85;
    canJump = true;

  }

  magasság = (170 - dy - 85) * 10

  document.getElementById("meter").innerHTML = Math.round(magasság) + "m"
  moveRect();

}

document.addEventListener('keyup', (event) => {
  if (event.code == 'Space') {
    moveUp();

  }
});
function TowerMovement() {


}
let towerX = 130;
var pontrendszer = 0  ;
function TwinTowers() {
  // a torony elhelyezése: y = 100-magasság
  // mozgatás x koordináta csökkentése -1el, intervál minnél alacsonyabb annál smoothabb!
  // a torony magassága maximum 100 lehet ez a pálya mérete!
  //ha a torony x(-50) akkor a pontszám 1-el növekszik illet x = 130
  // Csökkentjük a torony X koordinátáját 1-gyel
  
  towerX -= 1+(pontrendszer/10);

  document.getElementById("tower").setAttribute("x", towerX);
  document.getElementById("towerUp").setAttribute("x", towerX);

  if (towerX < -50) {
    towerX = 130;
    let magasság = Math.random() * 40 + 5;
    document.getElementById("tower").setAttribute("height", magasság);
    document.getElementById("tower").setAttribute("y", (100 - magasság));
    document.getElementById("towerUp").setAttribute("height", 100-(document.getElementById("tower").getAttribute('height')));
    pontrendszer +=1;
    document.getElementById("pontszam").innerHTML = `Pontszám: ${pontrendszer}`
    
  }


}




function hitboxtouch() {
  const planehitbox = repuloHitbox.getBoundingClientRect();
  const ToronyDown = Torony.getBoundingClientRect();
  const ToronyUp = Torony2.getBoundingClientRect();

  if (

    (planehitbox.right >= ToronyUp.left &&
    planehitbox.left <= ToronyUp.right &&
    planehitbox.bottom >= ToronyUp.top &&
    planehitbox.top <= ToronyUp.bottom)||

    (planehitbox.right >= ToronyDown.left &&
    planehitbox.left <= ToronyDown.right &&
    planehitbox.bottom >= ToronyDown.top &&
    planehitbox.top <= ToronyDown.bottom) 

    )
   {
    end =true;
    console.log(repuloHitbox.getAttribute('y'))
    
    robbanas.style.visibility = 'visible';

  }
}
setInterval(hitboxtouch,10)
//Game over vizsgálat
function isEnd()
{
  if(end)
  {
    clearInterval(mozgas)
    clearInterval(toronymovement)

  }


}


setInterval(isEnd, 10)
var valtozo1 = 20;   
var valtozo2 = (valtozo1/1000);

mozgas = setInterval(fall,valtozo1);


toronymovement =  setInterval(function () {TwinTowers();}, 10);

function GoodEnding(){
if(pontrendszer == 10)
{


}


}



