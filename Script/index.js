title = Create('head','title');
title.textContent = "X-Ray";
Headline = Create('body','h1');
Headline.textContent = "X-Ray Framework";
Device_Info = Device();
if (Device_Info[1] == undefined){
	CPU_Core_Info = Create('body','div');
	CPU_Core_Info.textContent = 'X-Ray Has NO Access to Your Processor Info';
}
else{
	CPU_Core_Info = Create('body','div');
	CPU_Core_Info.textContent = 'Your Processor has '+Device_Info[1]+' Concurrency Core';
}