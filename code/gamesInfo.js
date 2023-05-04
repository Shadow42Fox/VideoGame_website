const requestURL = "https://raw.githubusercontent.com/Shadow42Fox/VideoGame_website/main/code/games.xml"; 

function Open(){
const xhr = new XMLHttpRequest(); 
 
xhr.open('GET',requestURL , false); 
xhr.send(); 
 
let xmlData = xhr; 
xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml"); 

let hashA = window.location.hash.substring(1);
let game = xmlData.getElementById(hashA); 
console.log(game);
console.log(xmlData);
console.log(hashA);
document.getElementById('title').textContent=game.getElementsByTagName('title')[0].textContent;
//document.getElementById('video').href=game.getElementsByTagName('video')[0].textContent;
document.getElementById('nameGame').textContent=game.getElementsByTagName('nameGame')[0].textContent;
document.getElementById('CostGame').textContent=game.getElementsByTagName('CostGame')[0].textContent;
document.getElementById('infoJanre').textContent=game.getElementsByTagName('infoJanre')[0].textContent;
document.getElementById('infoDiff').textContent=game.getElementsByTagName('infoDiff')[0].textContent;
document.getElementById('description').textContent=game.getElementsByTagName('description')[0].textContent;
document.getElementById('info_hardware1').textContent=game.getElementsByTagName('info_hardware1')[0].textContent;
document.getElementById('info_hardware2').textContent=game.getElementsByTagName('info_hardware2')[0].textContent;
document.getElementById('info_hardware3').textContent=game.getElementsByTagName('info_hardware3')[0].textContent;
document.getElementById('info_hardware4').textContent=game.getElementsByTagName('info_hardware4')[0].textContent;
document.getElementById('info_hardware5').textContent=game.getElementsByTagName('info_hardware5')[0].textContent;
document.getElementById('info_hardware6').textContent=game.getElementsByTagName('info_hardware6')[0].textContent;
document.getElementById('info_develop1').textContent=game.getElementsByTagName('info_develop1')[0].textContent;
document.getElementById('info_develop2').textContent=game.getElementsByTagName('info_develop2')[0].textContent;
document.getElementById('info_develop3').textContent=game.getElementsByTagName('info_develop3')[0].textContent;
document.getElementById('info_develop4').textContent=game.getElementsByTagName('info_develop4')[0].textContent;
document.getElementById('info_develop5').textContent=game.getElementsByTagName('info_develop5')[0].textContent;

document.getElementById('pict1').src=game.getElementsByTagName('pict1')[0].textContent;
document.getElementById('pict2').src=game.getElementsByTagName('pict2')[0].textContent;
document.getElementById('pict3').src=game.getElementsByTagName('pict3')[0].textContent;
document.getElementById('pict4').src=game.getElementsByTagName('pict4')[0].textContent;

let videolink =  game.getElementsByTagName('video')[0].textContent;
let link = document.getElementById('video');
link.src=videolink;

(document.getElementById('link')).href = game.getElementsByTagName('link')[0].textContent;
(document.getElementById('vk')).href = game.getElementsByTagName('vk')[0].textContent;
(document.getElementById('twitter')).href = game.getElementsByTagName('twitter')[0].textContent;
(document.getElementById('telegram')).href = game.getElementsByTagName('telegram')[0].textContent;
(document.getElementById('instagram')).href = game.getElementsByTagName('instagram')[0].textContent;
(document.getElementById('github')).href = game.getElementsByTagName('github')[0].textContent;
}
window.addEventListener('hashchange', Open);

Open();