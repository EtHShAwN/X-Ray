/*

	X-Ray Framework

	A Lite Front End Developing Framework

			{ X-Mobile.js }

*/

'use-strict'

function INIT(){
	function Delete_Old_Style(){
		// Later we'll replace the remove() with removeChild()
		let Style = document.querySelector("link[type='text/css']");
		Style.remove();
		// let Script = document.querySelector('script[src="Script/X-Ray.js"]');
		// Script.remove();
	}
	Delete_Old_Style();
}
INIT();