/* jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

//x, y, width, height
ctx.fillRect(25, 25, 100, 100);

//czyszczenie
ctx.clearRect(45, 45, 60, 60);

for (i=0; i < 10; i++) {
  ctx.strokeRect(50 + i * 2, 50 + i * 2, 50 - i * 2, 50 - i * 2);
}

//określenie czcionki
ctx.font = 'italic bold 30px arial';
//top, middle, bottom
ctx.textBaseline = 'middle';
ctx.fillText('Witaj w CANVAS', 5, 220);

ctx.font = 'italic bold 20px arial';
//określenie koloru wypełnienia
ctx.fillStyle = 'purple';
ctx.textBaseline = 'middle';
//left, center, right
ctx.textAlign = 'center';
ctx.fillText('Wstawiamy tekścior', 100, 250);

//rysowanie koła
ctx.fillStyle = 'pink';
ctx.beginPath();
//środek koła, promień,koło lub wycinek koła
ctx.arc(150, 150, 50, 0, 2*Math.PI);
ctx.fill();
ctx.strokeStyle = '#000000';
ctx.arc(150, 150, 40, 0, 1.5*Math.PI);
ctx.stroke();
