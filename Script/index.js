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
console.log(Dom_Tree());