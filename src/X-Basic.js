/*
	======================
	X-Ray.JS 
	-------------------------------------
	Description:
		A Lite Web Application
		Development Package Build
		With Pure Javascript
	-------------------------------------
	This File:
		This File is Used to Create
		Basic HTML & DOM
	-------------------------------------
	Last Modify: 2022/9/29-20:15
	-------------------------------------
	Author: Ethan Shen
	-------------------------------------
	Version: 0.0.0.01_dev_Alpha
	-------------------------------------
	Copy Right
	(C) 2022 NLTech Coporation
	======================
*/

"use strict";

let Get_Version = () =>{
	const Version = ["0.0.0.01_dev_Alpha","Build 04","MidNight"];
	return Version;
}

function Create_Element(Base,Target,Content){
	let Base_Obj = document.getElementsByTagName(Base)[0];
	let Append_Obj = document.createElement(Target);
	let Text_Node = document.createTextNode(Content);
	Append_Obj.appendChild(Text_Node);
	Base_Obj.appendChild(Append_Obj);
	return Append_Obj;
}

function Get_Device_Info(){
	let Device =[];
	Device[0] = navigator.userAgent;
	Device[1] = navigator.platform;
	Device[2] = window.screen.width+'x'+window.screen.height;
	return Device;
}

function Attribute(Object,Selector,Name){
	Attr = Object.setAttribute(Selector,Name);
	return Attr;
}

/*

	*Provide a Standard In/Out Stream Function

*/
function printf(){
	if (typeof(arguments[0]) == 'undefined') {
		console.error('Stderr::No Legal String Value Detected');
	}
	if (typeof(arguments[1]) != 'undefined') {
		if (arguments[1] == '-c') {
			console.log('Printf --Specified Style');
		}
	}
	let String =  arguments[0];
	console.log(String);
}

// Later successor by printf() function
let CCSS = 'border-top-right-radius:10px;border-bottom-right-radius:10px;border:solid 1px #000000;background-image:linear-gradient(to right ,#FA709A, #330867);color:#FDECA6;';
console.log(`%c 👾X-Ray.JS Version:${Get_Version()[0]}[${Get_Version()[1]}]  `,CCSS);