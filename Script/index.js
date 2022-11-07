Page = INIT();
if (Page['Platform'] == 'Mobile'){
	Load_Style('Style/Mobile.css');
}
title = Create('head','title');
title.textContent = "X-Ray";
Headline = Create('body','h1');
Headline.textContent = "X-Ray Framework";
Button = Create('body','button');
Button.textContent = "Detect Your Device Information";
Set_Element_Attiributes(Button,'id','CPU_Info');
Set_Element_Attiributes(Button,'onclick','Device_Info()');
function Device_Info() {
	Device_Value = Device();
	CPU_Core_Info = Create('body','div');
	if (Device_Value[1] == undefined){
		CPU_Core_Info.textContent = 'X-Ray Has NO Access to Your Processor Info';
	}
	else{
		CPU_Core_Info.textContent = ('Your Processor has '+
									Device_Value[1]+
									' Concurrency Core');
	}
	Set_Element_Attiributes(CPU_Core_Info,'id','CPU_Core_Info')
	Set_Element_Attiributes(Button,'onclick','')
}
Download_Link = Create('body','a');
Download_Link.textContent = 'Download X-Ray';
Set_Element_Attiributes(Download_Link,
	'href',
	'https://github.com/Phage-Official/X-Ray/releases/download/X-Ray/X-Ray.rar')
if (Page['Platform'] == 'Mobile'){
	let D0 = Create('body','div');
	D0.textContent='You are using Mobile Device';
}
else{
	C0 = Create('body','canvas');
	var ctx = C0.getContext('2d');
	let s0 = Create('body','script');
	Set_Element_Attiributes(s0,'type','text/javascript');
	Set_Element_Attiributes(s0,'src','Script/Game.js');
}
