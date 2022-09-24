Create_Element('head','title','X-Ray Framework X-Ray.JS👾');
Create_Element('body','h1','侬好 | こんにちは | 안녕하세요 | Hi');
let version = Get_Version();
Create_Element('body','h2',`当前的X-Ray版本:${version[0]}(${version[1]})`);
Create_Element('body','h3','----- Get Device Info Function Test -----');
Device = Get_Device_Info();
UA = Create_Element('body','div',`您的用户代理为:${Device[0]}`);
Attribute(UA,'id','UA');
Create_Element('body','div',`您使用的平台为:${Device[1]}`);
Create_Element('body','div',`您的屏幕尺寸为:${Device[2]}`);
let d = new Date();
let t = d.toLocaleTimeString();
time = Create_Element('body','div','当前时间:'+t);
time_attr = Attribute(time,'id','time');
function Time() {
	let d = new Date();
	let t = d.toLocaleTimeString();
	text = document.getElementById('time');
	text.innerHTML="当前时间:"+t;
}
window.setInterval(Time,1000);