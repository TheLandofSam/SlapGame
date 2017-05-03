function FlowerService() {
  //service
  var flower = {
    id: 1,
    health: 0,
    stages: ["http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower0B_zpsfdfvicy1.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower1B_zps79rk23od.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower2B_zpsvyhxxhsi.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower3B_zpskeoktwlj.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower4B_zpsvdh78pyu.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower5_zpsbnhte7ca.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/Grow-a-flower6_zpsnnzarjoo.jpeg", "http://i44.photobucket.com/albums/f3/suhmantha/zombie18_zpszjqlgzpp.png"],
    currentStage: 0
  }

  //service

  function flowerManager() {
    if (flower.health >= 0 && flower.health < 15) {
      flower.currentStage = 0
    } else if (flower.health >= 15 && flower.health < 28) {
      flower.currentStage = 1
    } else if (flower.health >= 28 && flower.health < 38) {
      flower.currentStage = 2
    } else if (flower.health >= 38 && flower.health < 50) {
      flower.currentStage = 3
    } else if (flower.health >= 50 && flower.health < 75) {
      flower.currentStage = 4
    } else if (flower.health >= 75 && flower.health < 85) {
      flower.currentStage = 5
    } else if (flower.health >= 85 && flower.health < 95) {
      flower.currentStage = 6
    } else if (flower.health >= 95 && flower.health < 150) {
      flower.currentStage = 6
    } else {
      flower.currentStage = 7
      /* controller
      document.getElementById('zombiemessage').innerHTML = "Your flower was tasty."
    }
  */
    }
  }

  //SERVICE
  this.give = function give(type) {
    if (type == 'reset') {
      return reset()
    }

    if (flower.health >= 150) { return }

    flower.health += items[type].modifier
    flowerManager()
  }

  this.getFlower = function () {
    return flower
  }

  function reset() {
    flower.health = 0
    flower.currentStage = 0
    flowerManager()
  }


  /*function poision() {
   
  }*/

  /*When someone waters/feeds/fertilizes/potions the flower, the health of the flower increases, and the health counter needs to increment. When the health increases it needs to be compared to the current health level to see if the image needs to change out.  */

  //flower.currentHealth/flower.stages


  // function give(water, sun, fertilizer, potion/*,poision*/) {
  //   this.water = water;
  //   this.sun = sun;
  //   this.fertilizer = fertilizer;
  //   this.potion = potion;
  //   //this.poision = poision;
  //   this.newFlower = reset;
  // }

  var Items = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
  }

  //This confuses me, it is from Readme 2...
  var items = {
    water: new Items("water", 3, "Clean fresh water."),
    sun: new Items("sun", 5, "Mmmm, so warm."),
    fertilizer: new Items("fertilizer", 10, "Food!"),
    potion: new Items("potion", 30, "Its magic!"),
    //poision:new Element("poision",-7,"Its black magic!")

  }



  //reset needs to be get a new flower

  /*this.reset = plantNewFlower()
    flower.health == 100
    flower.health = 0
  */
}