function FlowerService() {
 var lastItemGiven = ''
 var fiveFert = 0
 var fourSkull = 0
 var blueRibbon = 0
 var waterClicks = 0
 var sunClicks = 0
 var fertilizerClicks = 0
 var noteClicks = 0
  //service
  function Flower(){
    this.id = 1,
    this.health = 0,
    this.stages = ["../assets/Grow-a-flower0B.jpeg", "../assets/Grow-a-flower1B.jpeg", "../assets/Grow-a-flower2B.jpeg", "../assets/Grow-a-flower3B.jpeg", "../assets/Grow-a-flower4B.jpeg", "../assets/Grow-a-flower5.jpeg", "../assets/Grow-a-flower6.jpeg", "../assets/zombie18.png", "../assets/GameOver.jpg", "../assets/d23088a6ac59591719725083951cd673_1st-place-blue-ribbon-clipart-blue-ribbon-clip-art_650-1171.png"],
    this.currentStage = 0
    //array: this.tools = [], update every time you are going to update the health, check tool array first and account for item.
    
  } ////!!!This code was pushed before begining the transistion to a Flower constructor.

  var flower = new Flower()

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
    } else if (flower.health < 0){
      flower.currentStage = 8
    } else if (flower.health >= 115 && blueRibbon >= 20){
      flower.currentStage = 9
    } else {
      flower.currentStage = 7
    }
  }

  //SERVICE
  this.give = function give(type) {
    console.log(lastItemGiven)
    if (type == 'reset') {
      return reset()
    }

    if(flower.health >= 150 || flower.health < 0) { 
      return
    }

    if(type == "water"){
      waterClicks += 1
    }

    if(waterClicks == 11){
      flower.currentStage = 8
      flower.health = -14
    }
    
    if(type == "sun"){
      sunClicks += 1
    }

    if(sunClicks == 13){
      flower.currentStage = 8
      flower.health = -14
    }

    if(type == "fertilizer"){
      fertilizerClicks += 1
    }

    if(fertilizerClicks == 5){
      flower.currentStage = 8
      flower.health = -14
    }

    if(type == "potionNote"){
      noteClicks += 1
    }

    if(noteClicks == 8){
      flower.currentStage = 8
      flower.health = -14
    }

    if((lastItemGiven == "potionBlue") && (type == "potionBlue" || type == "potionBlack")) {
      flower.health = -14
    }

    if((lastItemGiven == "potionBlack") && (type == "potionBlue" || type == "potionBlack")) {
      flower.health = -14
    }
    
    if((lastItemGiven == "sun") && (type == "potionRed")){
      flower.health += 5
    }

    if((lastItemGiven == "potionBlue") && (type =="potionRed")){
      flower.health += 15
    }

    if((lastItemGiven == "fertilizer") && (type == "fertilizer")){
      fiveFert += 4
    }

    if(type == "fertilizer"){
      fiveFert += 1
    }

    if(fiveFert == 5){
      flower.health = -14
    }

    if((lastItemGiven == "potionSkull") && (type == "potionSkull")){
      fourSkull += 3
    }

    if(type == "potionSkull"){
      fourSkull += 1
    }

    if(fourSkull >= 4){
      flower.health = -14
    }

    if((type == "potionYelGrn") && (lastItemGiven == "water")){
      blueRibbon += 1
      fiveFert = 0
    }

    if((type == "potionStar") && (lastItemGiven == "sun")){
      fourSkull = 0
      blueRibbon += 1
    }

    if((lastItemGiven == "sun") && (type == "potionRed")){
      blueRibbon += 1
    }

    if((type == "water") || (type == "sun") || (type == "fertilizer")){
      blueRibbon += 1
    }

    if(type == "potionNote"){
      blueRibbon +=1
    }

    if((lastItemGiven == "potionNote") && (type == "potionNote")){
      blueRibbon += 2
    }

    if(type == "potionSnakeOil"){
      blueRibbon += -12
    }

    if((blueRibbon >= 20) && (flower.health >= 110) && (flower.health <= 135)){
      flower.currentStage = 9
      return
    }

    if (flower.currentStage == 9){
      return
    }
//at this step sun breaks. Ask Mark or Jake.
    if ((flower.health <= 0 && type == "potionBlue") || (flower.health <= 0 && type == "potionBlack")) {
      flower.health = -14
    }else{flower.health += items[type].modifier}
 

   lastItemGiven = type
   console.log(lastItemGiven)
    flowerManager()
  }

  this.getFlower = function () {
    return flower
  }

  this.reset = function reset() {
    flower.health = 0
    flower.currentStage = 0
    lastItemGiven = ''
    fiveFert = 0
    fourSkull = 0
    blueRibbon = 0
    waterClicks = 0
    sunClicks = 0
    fertilizerClicks = 0
    flowerManager()
  }


  var Items = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
  }

  //This confuses me, it is from Readme 2...
  var items = {
    water: new Items("water", 3, "Clean fresh water."),
    sun: new Items("sun", 5, "Mmmm, so warm."),
    fertilizer: new Items("fertilizer", 7, "Food!"),
    potionRed: new Items("potion", 10, "Its magic!"),
    potionYelGrn: new Items("potion", 4, "Its magic!"),
    potionStar: new Items("potion", 20, "Its magic!"),
    potionSkull: new Items("potion", 12, "Its magic!"),
    potionBlack: new Items("poision",-22,"Its black magic!"),
    potionBlue: new Items("potion", -3, "This concoction is not good for your plant!"),
    potionNote: new Items("potion", 2, "Attention!"),
    potionSnakeOil: new Items("potion", 0, "Have you never been warned about Snake Oil salesmen?"),
  }

}