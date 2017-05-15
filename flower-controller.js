function FlowerController() {
  var service = new FlowerService()
  //controller
  var flowerPic = document.getElementById("flower-pic")

  //STAY IN CONTROLLER
  function update() {
    var flower = service.getFlower()
    //controller

    if(flower.currentStage == 7){
        document.getElementById('zombie-message').innerHTML = "Your flower was tasty."
    }else{
        document.getElementById('zombie-message').innerHTML = ""      
    }

    flowerGrowth.innerHTML = "Flower Health " + flower.health
    flowerPic.src = flower.stages[flower.currentStage]
  }

  this.giveItem = function(type){
    service.give(type)
    update()
  }
  this.newFlower = function(){
    service.reset()
    update()
  }

}
