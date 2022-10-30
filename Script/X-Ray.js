/*

	X-Ray Framework

	A Lite Front End Developing Framework

*/

'use-strict'

console.log('%c  X-Ray Framework Version 5.0.0  ',
					'color:#32BFF4;'+
					'background-color:#040243;font-size:20px;'+
					'border:solid 4px #C1C6FC;border-radius:10px;'+
					'padding-top:10px;padding-bottom:10px;'+
					'text-align:center;text-shadow:0 0 10px #2DFE54,'+
					'0 0 20px #2DFE54;',
					end=''
					);

function Create_Element(Parent,Element){
	let Parent_Node = document.getElementsByTagName(Parent)[0];
	Parent_Node.appendChild(Element);
	let Node_Collection = [Parent_Node];
	return Node_Collection;
}

function Create_Virtual_Element(Tag){
	let Virtual_Element = document.createElement(Tag);
	return Virtual_Element;
}

function Create(Parent,Tag){
	let Element = Create_Virtual_Element(Tag);
	Create_Element(Parent,Element);
	return Element;
}

function Device(){
	let Core_Num = navigator.hardwareConcurrency;
	let User_Agent = navigator.userAgent;
	return [User_Agent,Core_Num]
}