var flower = {
  id: 1,
  health: 0,
  stages: ["http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower0B_zpsfdfvicy1.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower1B_zps79rk23od.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower2B_zpsvyhxxhsi.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower3B_zpskeoktwlj.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower4B_zpsvdh78pyu.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower5_zpsbnhte7ca.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower6_zpsnnzarjoo.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/zombie18_zpszjqlgzpp.png"],
  currentStage: 0
}

var flowerPic = document.getElementById("flower-pic")

function flowerManager() {
  if (flower.health >= 0 && flower.health < 15){
    flower.currentStage = 0
  }else if(flower.health >= 15 && flower.health < 28){
    flower.currentStage = 1
  }else if(flower.health >= 28 && flower.health < 38){
    flower.currentStage = 2
  }else if(flower.health >= 38 && flower.health < 50){
    flower.currentStage = 3
  }else if(flower.health >= 50 && flower.health < 75){
    flower.currentStage = 4
  }else if(flower.health >= 75 && flower.health < 85){
    flower.currentStage = 5
  }else if(flower.health >= 85 && flower.health < 95){
    flower.currentStage = 6
  }else if(flower.health >= 95 && flower.health < 150){
    flower.currentStage = 6 
  }else{
    document.getElementById('zombiemessage').innerHTML = "Your flower was tasty."
    flower.currentStage = 7
  }


  flowerGrowth.innerHTML = "Flower Health " + flower.health
  flowerPic.src = flower.stages[flower.currentStage]
}

function water() {
  flower.health += 3
  flowerManager()
}

function sun() {
  flower.health += 5
  flowerManager()
}

function fertilizer() {
  flower.health += 10
  flowerManager()
}


function potion() {
  flower.health += 30
  flowerManager()
}

function newFlower() {
  flower.health = 0;
  //currentStage = 0;
  flowerManager()
}

/*function poision() {

}*/


/*When someone waters/feeds/fertilizes/potions the flower, the health of the flower increases, and the health counter needs to increment. When the health increases it needs to be compared to the current health level to see if the image needs to change out.  */

//flower.currentHealth/flower.stages