function FlowerController() {
  var service = new FlowerService()
  //controller
  var flowerPic = document.getElementById("flower-pic")

  //STAY IN CONTROLLER
  function update() {
    var flower = service.getFlower()
    //controller

    if(flower.currentStage == 7){
        document.getElementById('zombiemessage').innerHTML = "Your flower was tasty."
    }else{
        document.getElementById('zombiemessage').innerHTML = ""      
    }

    flowerGrowth.innerHTML = "Flower Health " + flower.health
    flowerPic.src = flower.stages[flower.currentStage]
  }

  this.water = function water() {
    //stay in controller
    service.give("water")
    update()
  }
  this.sun = function sun() {
    // flower.health += 5
    service.give("sun")
    update()
  }

  this.fertilizer = function fertilizer() {
    // flower.health += 10
    service.give("fertilizer")
    update()
  }

  this.potion = function potion() {
    //flower.health += 30
    service.give("potion")
    update()
  }

  this.newFlower = function newFlower() {
    // flower.health = 0;
    service.give("reset")
    update()
  }


}