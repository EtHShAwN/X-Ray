/* 

    X-Ray Framework Version 2.00

*/

'use-strict'
function Create(ObjList){

    for (var i = 0; i < ObjList.length; i++) {
        if (typeof(ObjList[i]['Tag']) == 'undefined'){
            console.error('No Tagname');
            return;
        }
        if (typeof(ObjList[i]['Parent']) == 'undefined'){
            var t = document.createElement(ObjList[i]['Tag']);
            document.body.appendChild(t);
            delete ObjList[i]['Tag']
        }
        else{
            var p = document.getElementsByTagName(ObjList[i]['Parent'])[0];
            var t = document.createElement(ObjList[i]['Tag']);
            p.appendChild(t);
            delete ObjList[i]['Parent']
            delete ObjList[i]['Tag']
        }

        // use a switch case to attach all
        // the attributes to DOM Element
        for (var key in ObjList[i]){
            switch (key) {
                case 'Text':
                    t.innerText = ObjList[i][key]
                    break;
                case 'Parent':
                    break;
                case 'Tag':
                    break;
                default:
                    t.setAttribute(key,ObjList[i][key]);
                    break;
            }
            delete ObjList[i][key]
        }
    }
    return;
}