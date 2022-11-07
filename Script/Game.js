/*
	A Tiny Game
*/
const Player_0_Image = new Image();
const Player_1_Image = new Image();
const width = C0.width= 800;
const height = C0.height = 600;
function animate(){
	Player_0_Image.src = 'Resource/A.png';
	Player_1_Image.src = 'Resource/L.png';
	ctx.drawImage(Player_0_Image,160,522);
	ctx.drawImage(Player_1_Image,560,522);
	requestAnimationFrame(animate);
}
animate();