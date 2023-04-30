var sprite = new Image();
var pos = 0;
var canvas;
var ctx2d;

function init() {
    canvas = document.getElementById("canvas")
    ctx2d = canvas.getContext('2d');
    sprite.src = 'player.png';
    window.requestAnimationFrame(render);
}

function render() {
    ctx2d.clearRect(0, 0, canvas.width, canvas.height);

    ctx2d.fillStyle = 'black';
    ctx2d.font = '10px Monaco, Consolas, monospace';
    ctx2d.fillText('Canvas draw with GPU scaling', 5, 15)

    pos = (pos + 1) % 300;
    ctx2d.drawImage(sprite, pos, 30);

    ctx2d.beginPath();
    ctx2d.arc(55,40,15,0,2*Math.PI);
    ctx2d.stroke();

    window.requestAnimationFrame(render);
}


