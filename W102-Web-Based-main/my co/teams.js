



// Fixed nullError to run/load javascript after the html 
window.onload=function(){

// create new p element
let newP1 = document.createElement("p");
//give p element text
newP1.textContent = "Bio: Chocolate labs and german sheperds, 27 years old";
newP1.style.cssText = "color : white";
// select the dom id
let s1 = document.querySelector("#p1");
//insert
s1.parentElement.insertBefore(newP1, s1);

let newP2 = document.createElement("p");
newP2.textContent = "Role in Project: Software Developer ";
newP2.style.cssText = "color : white";
let s2 = document.querySelector("#p2");
s2.parentElement.insertBefore(newP2, s2);

let newP3 = document.createElement("p");
newP3.textContent = "Resposibility and contribution: Team Page creaiton";
newP3.style.cssText = "color : white";
let s3 = document.querySelector("#p3");
s3.parentElement.insertBefore(newP3, s3);

let newP4 = document.createElement("p");
newP4.textContent = "Bio: Loves formula 1, and java lectures "  ;
newP4.style.cssText = "color : white";
let s4 = document.querySelector("#p4");
s4.parentElement.insertBefore(newP4, s4);


let newP5 = document.createElement("p");
newP5.textContent = "Role in project: Team leader";
newP5.style.cssText = "color : white";
let s5 = document.querySelector("#p5");
s5.parentElement.insertBefore(newP5, s5);

let newP6 = document.createElement("p");
newP6.textContent = "Responsibility and contribution: Oversaw the creation of whole project inc CSS styling and JS ";
newP6.style.cssText = "color : white";
let s6 = document.querySelector("#p6");
s6.parentElement.insertBefore(newP6, s6);

let newP7 = document.createElement("p");
newP7.textContent = "Bio: Top 500 in overwatch, likes football, eve france ";
newP7.style.cssText = "color : white";
let s7 = document.querySelector("#p7");
s7.parentElement.insertBefore(newP7, s7);

let newP8 = document.createElement("p");
newP8.textContent = "Role in project: Software Developer   " ;
newP8.style.cssText = "color : white";
let s8 = document.querySelector("#p8");
s8.parentElement.insertBefore(newP8, s8);


let newP9 = document.createElement("p");
newP9.textContent = "Responsilbity and contribution: User guide creation, Bug Fix contributions, Chapter y creation ";
newP9.style.cssText = "color : white";
let s9 = document.querySelector("#p9");
s9.parentElement.insertBefore(newP9, s9);

let newP10 = document.createElement("p");
newP10.textContent = "Bio: Likes Linkin park, drinks lots of water ";
newP10.style.cssText = "color : white";
let s10 = document.querySelector("#p10");
s10.parentElement.insertBefore(newP10, s10);

let newP11 = document.createElement("p");
newP11.textContent = "Role in project: Software Developer ";
newP11.style.cssText = "color : white";
let s11 = document.querySelector("#p11");
s11.parentElement.insertBefore(newP11, s11);

let newP12 = document.createElement("p");
newP12.textContent = "Resposibility and contribution: Javascript Specialist, Did javascript for chapter X  " ;
newP12.style.cssText = "color : white";
let s12 = document.querySelector("#p12");
s12.parentElement.insertBefore(newP12, s12);
}