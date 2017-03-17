// var inputsId = ["title", "productDescription", "video", "oblast", "name",
//     "phone", "e-mail", "password"];
// var hiddenDivsId = ["titleHiddenDiv", "descriptionHiddenDiv", "videoHiddenDiv",
//     "oblastHiddenDiv", "nameHiddenDiv", "phoneHiddenDiv", "e-mailHiddenDiv", "passwordHiddenDiv"];
// for (var index = 0; index < inputsId.length; index++) {
//     document.getElementById(inputsId[index]).addEventListener("focus", function () {
//         document.getElementById(hiddenDivsId[index]).cssText = "visibility: visible;";
//     }, false);
// }
// for (var index = 0; index < inputsId.length; index++) {
//     document.getElementById(inputsId[index]).addEventListener("focusout", function () {
//         document.getElementById(hiddenDivsId[index]).style.display = "none";
//     }, false);
// }
// the code starst from here
// event listener for заглавие
document.getElementById("title").addEventListener("focus", function(){
    document.getElementById("titleHiddenDiv").style.display = "initial";
},false);
document.getElementById("title").addEventListener("focusout", function(){
    document.getElementById("titleHiddenDiv").style.display = "none";
},false);
// event listener for Текст
document.getElementById("productDescription").addEventListener("focus", function(){
    document.getElementById("descriptionHiddenDiv").style.display = "initial";
},false);
document.getElementById("productDescription").addEventListener("focusout",function(){
    document.getElementById("descriptionHiddenDiv").style.display = "none";
},false);
// event listener for Видео
document.getElementById("video").addEventListener("focus", function(){
    document.getElementById("videoHiddenDiv").style.display = "initial";
},false);
document.getElementById("video").addEventListener("focusout",function(){
    document.getElementById("videoHiddenDiv").style.display = "none";
},false);
// event listener for Местоположение
document.getElementById("oblast").addEventListener("focus", function(){
    document.getElementById("oblastHiddenDiv").style.display = "initial";
},false);
document.getElementById("oblast").addEventListener("focusout",function(){
    document.getElementById("oblastHiddenDiv").style.display = "none";
},false);
// event listener for Вашето име
document.getElementById("name").addEventListener("focus", function(){
    document.getElementById("nameHiddenDiv").style.display = "initial";
},false);
document.getElementById("name").addEventListener("focusout",function(){
    document.getElementById("nameHiddenDiv").style.display = "none";
},false);
// event listener for Телефон
document.getElementById("phone").addEventListener("focus", function(){
    document.getElementById("phoneHiddenDiv").style.display = "initial";
},false);
document.getElementById("phone").addEventListener("focusout",function(){
    document.getElementById("phoneHiddenDiv").style.display = "none";
},false);
// event listener for E-mail
document.getElementById("e-mail").addEventListener("focus", function(){
    document.getElementById("e-mailHiddenDiv").style.display = "initial";
},false);
document.getElementById("e-mail").addEventListener("focusout",function(){
    document.getElementById("e-mailHiddenDiv").style.display = "none";
},false);
// event listener for Парола
document.getElementById("password").addEventListener("focus", function(){
    document.getElementById("passwordHiddenDiv").style.display = "initial";
},false);
document.getElementById("password").addEventListener("focusout",function(){
    document.getElementById("passwordHiddenDiv").style.display = "none";
},false);





