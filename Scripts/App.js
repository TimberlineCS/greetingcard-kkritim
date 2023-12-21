//Kriti Murali
//Period 7
//12/12/23

/*This is a Christmas card with a red heading, a green Christmas saying, and elements that consist of a Christmas Tree, a snowman, candy canes, an elf, a penguin, an ice skater, presents, and Santa Claus. There is also an audio of Santa Claus is Coming to Town.*/

//create card element
var card = document.createElement("div");
card.id = "card";
document.body.append(card);
var cardWidth = "75em"; //customizing card
var cardHeight = "45em"; //i probably shouldn't have used em but it's fine... right?? heh...
var cardMargin = "4em";
var cardRadius = "2em";
card.style.backgroundColor = "#b3ffb3";
card.style.width = cardWidth;
card.style.height = cardHeight;
card.style.margin = cardMargin + " auto";
card.style.position = "relative";
card.style.borderRadius = cardRadius;

//doubling to make one big card
var cardLeft = document.createElement("div"); //I could've made just one big card but it was easier to double.
var cardRight = document.createElement("div");
cardLeft.style.width = "50%";
cardRight.style.width = "50%";
cardLeft.style.height = cardHeight;
cardRight.style.height = cardHeight;
cardLeft.style.float = "left";
cardRight.style.float = "left";
card.append(cardLeft, cardRight);

//main title heading
var heading = document.createElement("h1"); 
heading.textContent = "Wishing You A Merry Christmas!";
heading.style.color = "red";
heading.style.fontSize = "2.5em";
heading.style.fontFamily = "cursive";
heading.style.position = "absolute";
heading.style.top = "10px";
heading.style.left = "10px";
card.append(heading);

//green text under the heading stating a quote
var darkGreenTitle = document.createElement("p"); 
darkGreenTitle.textContent = "Wishing you a season that's merry and bright with the light of God's love.";
darkGreenTitle.style.color = "#006400";
darkGreenTitle.style.fontSize = "1.5em";
darkGreenTitle.style.fontFamily = "cursive";
darkGreenTitle.style.position = "absolute";
darkGreenTitle.style.top = "70px";
darkGreenTitle.style.left = "10px";
darkGreenTitle.style.marginTop = "50px";
card.append(darkGreenTitle);

//christmas tree on the very left of the card
var christmasTreeImage = document.createElement("img"); 
christmasTreeImage.src = "Images/christmasTreeImage.png";
christmasTreeImage.style.width = "200px";
christmasTreeImage.style.height = "500px";
christmasTreeImage.style.position = "absolute";
christmasTreeImage.style.bottom = "10px";
christmasTreeImage.style.left = "10px";
card.append(christmasTreeImage);

//snow falling gif covering the whole card
var snowCover = document.createElement("div");
snowCover.style.width = "100%";
snowCover.style.height = "100%";
snowCover.style.position = "absolute";
snowCover.style.top = "0";
snowCover.style.left = "0";
snowCover.style.background = "url('Images/snowCover.png')";
card.append(snowCover);

//snowman gif
var snowmanImage = document.createElement("img"); 
snowmanImage.src = "Images/snowmanImage.png";
snowmanImage.style.width = "300px";
snowmanImage.style.position = "absolute";
snowmanImage.style.bottom = "10px";
snowmanImage.style.left = "260px";
card.append(snowmanImage);

//candy cane next to the christmas tree and in the middle of the snowman
var candyCaneImage = document.createElement("img");
candyCaneImage.src = "Images/candyCane.png";
candyCaneImage.style.width = "50px";
candyCaneImage.style.position = "absolute";
candyCaneImage.style.bottom = "10px";
candyCaneImage.style.left = "230px";
card.append(candyCaneImage);

//candy cane on top of the first one but flipped 180 degrees
var flippedCandyCaneImage = document.createElement("img"); 
flippedCandyCaneImage.src = "Images/candyCane.png";
flippedCandyCaneImage.style.width = "50px";
flippedCandyCaneImage.style.position = "absolute";
flippedCandyCaneImage.style.bottom = "130px";
flippedCandyCaneImage.style.left = "230px";
flippedCandyCaneImage.style.transform = "rotateY(180deg)";
card.append(flippedCandyCaneImage);

//another candy cane facing the original way but on top of the flipped one
var candyCaneImage2 = document.createElement("img"); 
candyCaneImage2.src = "Images/candyCane.png";
candyCaneImage2.style.width = "50px";
candyCaneImage2.style.position = "absolute";
candyCaneImage2.style.bottom = "250px";
candyCaneImage2.style.left = "230px";
card.append(candyCaneImage2);

//an elf holding onto the bottom candy cane
var elfImage = document.createElement("img"); 
elfImage.src = "Images/elfImage.png";
elfImage.style.width = "80px";
elfImage.style.height = "80px";
elfImage.style.position = "absolute";
elfImage.style.bottom = "10px";
elfImage.style.left = "270px";
card.append(elfImage);

//a penguin standing beside the middle candy cane
var penguinChristmas = document.createElement("img"); 
penguinChristmas.src = "Images/penguinChristmas.png";
penguinChristmas.style.width = "40px";
penguinChristmas.style.height = "85px";
penguinChristmas.style.position = "absolute";
penguinChristmas.style.top = "495px";
penguinChristmas.style.left = "245px";
card.append(penguinChristmas)

//ice skater posing next to the top candy cane
var iceSkater = document.createElement("img"); 
iceSkater.src = "Images/iceSkater.png";
iceSkater.style.width = "50px";
iceSkater.style.height = "85px";
iceSkater.style.position = "absolute";
iceSkater.style.top = "380px";
iceSkater.style.left = "228px";
card.append(iceSkater);

//santa on the very right of the card
var santaClaus = document.createElement("img");
santaClaus.src = "Images/santaClaus.png";
santaClaus.style.width = "300px";
santaClaus.style.height = "300px";
santaClaus.style.position = "absolute";
santaClaus.style.bottom = "10px";
santaClaus.style.left = "850px";
card.append(santaClaus);

//merry christmas gif in the top-middle part of the card underneath the text
var merryChristmas = document.createElement("img");
merryChristmas.src = "Images/merryChristmas.png";
merryChristmas.style.width = "300px";
merryChristmas.style.height = "300px";
merryChristmas.style.position = "absolute";
merryChristmas.style.top = "200px";
merryChristmas.style.left = "500px";
card.append(merryChristmas);

//the red square of the red present, the present to the far right
var redPresent = document.createElement("div");
redPresent.className = "present-box";
redPresent.style.backgroundColor = "red";
redPresent.style.position = "absolute";
redPresent.style.width = "80px";
redPresent.style.height = "80px";
redPresent.style.left = "900px";
redPresent.style.bottom = "-40px";
document.body.append(redPresent);

//the yellow strip on the red present box
var yellowRectangle = document.createElement("div");yellowRectangle.className = "vertical-rectangle";
yellowRectangle.style.backgroundColor = "yellow";
yellowRectangle.style.position = "absolute";
yellowRectangle.style.width = "10px";
yellowRectangle.style.height = "80px";
yellowRectangle.style.left = "935px";
yellowRectangle.style.bottom = "-40px";
document.body.append(yellowRectangle);

//the same yellow strip but horizontal on the red present box
var yellowRectangle2 = document.createElement("div");
yellowRectangle2.className = "horizontal-rectangle";
yellowRectangle2.style.backgroundColor = "yellow";
yellowRectangle2.style.position = "absolute";
yellowRectangle2.style.width = "80px";
yellowRectangle2.style.height = "10px";
yellowRectangle2.style.left = "900px";
yellowRectangle2.style.bottom = "20px";
document.body.append(yellowRectangle2);

//the yellow bow to top the red present
var yellowBow = document.createElement("img");
yellowBow.src = "Images/yellowBow.png";
yellowBow.style.width = "60px";
yellowBow.style.height = "60px";
yellowBow.style.position = "absolute";
yellowBow.style.left = "910px";
yellowBow.style.bottom = "10px";
document.body.append(yellowBow);

//the green square of the green present, the second one to the right
var greenPresent = document.createElement("div");
greenPresent.className = "present-box";
greenPresent.style.backgroundColor = "green";
greenPresent.style.position = "absolute";
greenPresent.style.width = "80px";
greenPresent.style.height = "80px";
greenPresent.style.left = "800px";
greenPresent.style.bottom = "-40px";
document.body.append(greenPresent);

//the blue strip on the green present box
var blueRectangle = document.createElement("div");
blueRectangle.className = "vertical-rectangle";
blueRectangle.style.backgroundColor = "blue";
blueRectangle.style.position = "absolute";
blueRectangle.style.width = "10px";
blueRectangle.style.height = "80px";
blueRectangle.style.left = "835px";
blueRectangle.style.bottom = "-40px";
document.body.append(blueRectangle);

//the same blue strip but horizontal on the green present box
var blueRectangle2 = document.createElement("div");
blueRectangle2.className = "horizontal-rectangle";
blueRectangle2.style.backgroundColor = "blue";
blueRectangle2.style.position = "absolute";
blueRectangle2.style.width = "80px";
blueRectangle2.style.height = "10px";
blueRectangle2.style.left = "800px";
blueRectangle2.style.bottom = "20px";
document.body.append(blueRectangle2);

//a blue bow to top the green present box
var blueBow = document.createElement("img");
blueBow.src = "Images/blueBow.png";
blueBow.style.width = "60px";
blueBow.style.height = "60px";
blueBow.style.position = "absolute";
blueBow.style.left = "810px";
blueBow.style.bottom = "10px";
document.body.append(blueBow); 

//the blue square of the blue present, the farthest one to the left
var bluePresent = document.createElement("div");
bluePresent.className = "present-box";
bluePresent.style.backgroundColor = "blue";
bluePresent.style.position = "absolute";
bluePresent.style.width = "80px";
bluePresent.style.height = "80px";
bluePresent.style.left = "600px";
bluePresent.style.bottom = "-40px";
document.body.append(bluePresent);

//the green strip on the blue present box
var greenRectangle = document.createElement("div");
greenRectangle.className = "vertical-rectangle";
greenRectangle.style.backgroundColor = "green";
greenRectangle.style.position = "absolute";
greenRectangle.style.width = "10px";
greenRectangle.style.height = "80px";
greenRectangle.style.left = "635px";
greenRectangle.style.bottom = "-40px";
document.body.append(greenRectangle);

//the same green strip but horizontal on the blue present box
var greenRectangle2 = document.createElement("div");
greenRectangle2.className = "horizontal-rectangle";
greenRectangle2.style.backgroundColor = "green";
greenRectangle2.style.position = "absolute";
greenRectangle2.style.width = "80px";
greenRectangle2.style.height = "10px";
greenRectangle2.style.left = "600px";
greenRectangle2.style.bottom = "20px";
document.body.append(greenRectangle2);

//a green bow to top the blue present box
var greenBow = document.createElement("img");
greenBow.src = "Images/greenBow.png";
greenBow.style.width = "60px";
greenBow.style.height = "60px";
greenBow.style.position = "absolute";
greenBow.style.left = "610px";
greenBow.style.bottom = "10px";
document.body.append(greenBow);

//the yellow box for the yellow present
var yellowPresent = document.createElement("div");
yellowPresent.className = "present-box";
yellowPresent.style.backgroundColor = "yellow";
yellowPresent.style.position = "absolute";
yellowPresent.style.width = "80px";
yellowPresent.style.height = "80px";
yellowPresent.style.left = "700px";
yellowPresent.style.bottom = "-40px";
document.body.append(yellowPresent);

//the vertical red strip in the middle of the yellow box
var redRectangle = document.createElement("div");
redRectangle.className = "vertical-rectangle";
redRectangle.style.backgroundColor = "red";
redRectangle.style.position = "absolute";
redRectangle.style.width = "10px";
redRectangle.style.height = "80px";
redRectangle.style.left = "735px";
redRectangle.style.bottom = "-40px";
document.body.append(redRectangle);

//the horizontal red strip over the yellow box
var redRectangle2 = document.createElement("div");
redRectangle2.className = "vertical-rectangle";
redRectangle2.style.backgroundColor = "red";
redRectangle2.style.position = "absolute";
redRectangle2.style.width = "80px";
redRectangle2.style.height = "10px";
redRectangle2.style.left = "700px";
redRectangle2.style.bottom = "20px";
document.body.append(redRectangle2);

//a red bow to top the yellow present
var redBow = document.createElement("img");
redBow.src = "Images/redBow.png";
redBow.style.width = "60px";
redBow.style.height = "60px";
redBow.style.position = "absolute";
redBow.style.left = "710px";
redBow.style.bottom = "10px";
document.body.append(redBow);

//circle head for the elf
var personHead = document.createElement("div");
personHead.style.width = "100px";
personHead.style.height = "100px";
personHead.style.borderRadius = "50%";
personHead.style.backgroundColor = "tan";
personHead.style.position = "absolute";
personHead.style.left = "1100px";
personHead.style.top = "270px";
document.body.append(personHead);

//red mouth for the elf
var personMouth = document.createElement("div");
personMouth.style.backgroundColor = "red";
personMouth.style.width = "30px";
personMouth.style.height = "8px";
personMouth.style.borderRadius = "0 0 50% 50%";
personMouth.style.position = "absolute";
personMouth.style.top = "345px";
personMouth.style.left = "1135px";
document.body.append(personMouth);

//left eye for the elf
var personEye = document.createElement("div");
personEye.style.width = "10px";
personEye.style.height = "10px";
personEye.style.borderRadius = "50%";
personEye.style.backgroundColor = "blue";
personEye.style.position = "absolute";
personEye.style.left = "1125px";
personEye.style.top = "310px";
document.body.append(personEye);

//right eye for the elf
var personEye2 = document.createElement("div");
personEye2.style.width = "10px";
personEye2.style.height = "10px";
personEye2.style.borderRadius = "50%";
personEye2.style.backgroundColor = "blue";
personEye2.style.position = "absolute";
personEye2.style.left = "1165px";
personEye2.style.top = "310px";
document.body.append(personEye2);

//green hat for the elf
var triangleHat = document.createElement("div");
triangleHat.className = "triangle";
triangleHat.style.borderLeft = "50px solid transparent";
triangleHat.style.borderRight = "50px solid transparent"; 
triangleHat.style.borderBottom = "150px solid green"; 
triangleHat.style.position = "absolute";
triangleHat.style.left = "1100px";
triangleHat.style.bottom = "440px";
document.body.append(triangleHat);

//gold bell for the top of the green hat
var goldCircle = document.createElement("div");
goldCircle.style.width = "25px";
goldCircle.style.height = "25px";
goldCircle.style.borderRadius = "50%";
goldCircle.style.backgroundColor = "gold";
goldCircle.style.position = "absolute";
goldCircle.style.left = "1138px";
goldCircle.style.bottom = "580px";
document.body.append(goldCircle);

//red triangle for the decoration of the bottom of the hat
var hatDesign = document.createElement("div");
hatDesign.className = "triangle";
hatDesign.style.borderLeft = "25px solid transparent";
hatDesign.style.borderRight = "25px solid transparent"; 
hatDesign.style.borderBottom = "50px solid red"; 
hatDesign.style.position = "absolute";
hatDesign.style.left = "1100px";
hatDesign.style.bottom = "440px";
document.body.append(hatDesign);

//another red triangle next to the original red triangle
var hatDesign2 = document.createElement("div");
hatDesign2.className = "triangle";
hatDesign2.style.borderLeft = "25px solid transparent";
hatDesign2.style.borderRight = "25px solid transparent"; 
hatDesign2.style.borderBottom = "50px solid red"; 
hatDesign2.style.position = "absolute";
hatDesign2.style.left = "1150px";
hatDesign2.style.bottom = "440px";
document.body.append(hatDesign2);

//piano version of santa claus is coming to town
var au = new Audio("Music/SantaClausIsComingToTown.mp3");
au.controls = true;
card.append(au);


