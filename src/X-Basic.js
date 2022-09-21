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
	Last Modify: 2022/9/21-20:35
	-------------------------------------
	Author: Ethan Shen
	-------------------------------------
	Version: 0.0.0.01_dev_Alpha
	-------------------------------------
	Copy Right
	(C) 2022 NLTech Coporation
	======================
*/

// Use Stirct Mode
"use strict";

let Get_Version = () =>{
	// Version Information Function
	const Version = ["0.0.0.01_dev_Alpha","Build 04"];
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

function Set_StyleSheet(Object){
	let style = Object.style;
	return style;
}
