// user color choice variables
var color1 = document.getElementById('user-color-1');
var color2 = document.getElementById('user-color-2');
var color3 = document.getElementById('user-color-3');
var color4 = document.getElementById('user-color-4');
var color5 = document.getElementById('user-color-5');
var circleNumber = document.getElementById('number-of-circles');

var submitBtn = document.getElementById('submit-btn');
var selectBtn = document.getElementById('selection-btn');
var direction = document.getElementsByClassName('direction');
// sets colors into user array
var colorsArr = [color1, color2, color3, color4, color5];
// function gets choices for user color and sends to local storage
selectBtn.addEventListener('click', function saveChoices() {
// sets colors equal to user choices
    color1 = color1.value;
    color2 = color2.value;
    color3 = color3.value;
    color4 = color4.value;
    color5 = color5.value;
    circleNumber = circleNumber.value;
    // sends colors to local storage
    localStorage.setItem('color', colorsArr);
    localStorage.setItem('number', circleNumber);
    localStorage.setItem('direction', direction);
});
// function sets user color to display boxes to double check
selectBtn.addEventListener('click', function getChoices() {
    localStorage.getItem('color');
    var choice1display = document.getElementById('show-user-choice-1');
    var userColor1 = colorsArr[0].value
    choice1display.style.backgroundColor = userColor1;

    var choice2display = document.getElementById('show-user-choice-2');
    var userColor2 = colorsArr[1].value
    choice2display.style.backgroundColor = userColor2;

    var choice3display = document.getElementById('show-user-choice-3');
    var userColor3 = colorsArr[2].value
    choice3display.style.backgroundColor = userColor3;

    var choice4display = document.getElementById('show-user-choice-4');
    var userColor4 = colorsArr[3].value
    choice4display.style.backgroundColor = userColor4;

    var choice5display = document.getElementById('show-user-choice-5');
    var userColor5 = colorsArr[4].value
    choice5display.style.backgroundColor = userColor5;
});
// creating canvas on screen
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// setting speeds and direction locations for circles
var x = canvas.width/2;
var y = canvas.height/2;
var speedX = 2;
var speedY = -2;
var circleRadius = 10;
// direction variables
var userDirectionBounce = document.getElementById('bounce');
var userDirectionUp = document.getElementById('move-up');
var userDirectionDown = document.getElementById('move-down');
var userDirectionGrow = document.getElementById('grow');

// draw circles
function drawCircle() {
    var userCircleColor = [];
    userCircleColor = localStorage.getItem('color');
    console.log(userCircleColor)
    ctx.beginPath('#circle');
    ctx.clearRect(0, 0, canvas.width, canvas.height);;
    // need to figure out the color array
    ctx.arc(x, y, circleRadius, 0 * Math.PI * 2);
    ctx.fillStyle = "userCircleColor";
    ctx.fill();
    ctx.closePath();
    // make the circles move || will also need to create movement names
    if (x + speedX > canvas.width-circleRadius ||) {
        
    }
    if (y + speedY > canvas.height-circleRadius ||) {
        
    }
}
var numberOfCircles = localStorage.getItem('circleNumber');
setInterval(drawCircle, numberOfCircles);



// animate choices // need to save the color inputs again 

