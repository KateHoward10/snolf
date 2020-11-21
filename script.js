const HOLE = [
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,
  5,5,5,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,5,5,5,5,
  5,5,5,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,
  5,5,5,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,5,5,5,
  5,5,5,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
  5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,
];

const SQUARE_TYPES = [
  { name: "grass", colour: "green" },
  { name: "tee", colour: "red" },
  { name: "hole", colour: "black" },
  { name: "water", colour: "deepskyblue" },
  { name: "bunker", colour: "gold" },
  { name: "rough", colour: "darkgreen" }
];

class Ball {
  constructor(x = 300, y = 200) {
    this.x = x;
    this.y = y;
  }
}

class Club {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Game {
  constructor(canvas, hole) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");    
    hole.forEach((square, i) => {
      if (square > 0 ) {
        this.context.fillStyle = SQUARE_TYPES[square].colour;
        this.context.fillRect((i % 30) * 20, (i / 30 | 0) * 20, 20, 20);
      }
    });

    this.ball = new Ball(((hole.indexOf(1) % 30) * 20) + 10, (((hole.indexOf(1) / 30) | 0) * 20) + 10);
    this.club = new Club(this.ball.x - 20, this.ball.y);
  }
  
  drawBall() {
    this.context.arc(this.ball.x, this.ball.y, 10, 0, 2 * Math.PI, false);
    this.context.fillStyle = "#fff";
    this.context.fill();
  }

  drawClub() {
    this.context.lineWidth = 10;
    this.context.strokeStyle = "#996633";
    this.context.beginPath();
    this.context.moveTo(this.club.x, this.club.y);
    this.context.lineTo(this.club.x - 100, this.club.y);
    this.context.stroke();
  }
}

const game = new Game(document.getElementById("game"), HOLE);

game.drawBall();
game.drawClub();