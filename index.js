const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.hight = Window.innerheight;

canvas.addEventListener('mousemove',function(e){
    console.log(e);

    ctx.beginPath();
    ctx.rect(e.x , e.y, 14, 65);
    ctx.fill();

})