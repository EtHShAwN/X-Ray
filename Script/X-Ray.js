/*

	X-Ray Framework

	A Lite Front End Developing Framework

			{ X-Ray.js }

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

function Set_Element_Attributes(Element,AttributeName,AttributeValue){
	Element.setAttribute(AttributeName,AttributeValue);
}

function Language_Adjust(){
	let User_Language = navigator.language;
	let html = document.getElementsByTagName('html')[0];
	Set_Element_Attributes(html,'lang',User_Language);
}

function Device(){
	let Core_Num = navigator.hardwareConcurrency;
	let User_Agent = navigator.userAgent;
	let Screen_Size = {'width':window.screen.width,'height':window.screen.height};
	return [User_Agent,Core_Num,Screen_Size];
}

function Load_Style(Style_Sheet_Path){
	let Style = Create('head','link');
	Set_Element_Attributes(Style,'rel','stylesheet');
	Set_Element_Attributes(Style,'type','text/css');
	Set_Element_Attributes(Style,'href',Style_Sheet_Path);
	return;
}

function INIT(){
	/* 
		Setup Basic Javascript & Html Runtime
	*/
	function Platform_Adjust(){
		let User_Agent = Device()[0];
		let Screen_Size = Device()[2];
		let Width = Screen_Size['width'];
		let Height = Screen_Size['height'];
		let Status_Code = [];
		if (Width < 500) {
			let Device_Type = 'Mobile';
			let New_Script = Create('head','Script');
			Set_Element_Attributes(New_Script,'type',"text/javascript");
			Set_Element_Attiributes(New_Script,'src',"Script\\X-Mobile.js");
			let Desktop_Link = document.querySelector("script[src]");
			return Device_Type;
		}
		else {
			let Device_Type = 'Desktop';
			return Device_Type;
		}
	}

	Language_Adjust();
	let Status_Code = [];
	Status_Code['Platform'] = Platform_Adjust();
	return Status_Code;
}
