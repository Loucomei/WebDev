const img = document.createElement("img");
img.src = "images/imgx.png";
img.style.width="100%";
img.style.height="400px";
img.style.objectFit="cover";
const src = document.getElementById("background");
src.appendChild(img);


const titi= "2. Global climate, emissions and adaptation";

document.getElementById("title").innerHTML=titi;

class chapters_info{
    constructor(id,title,text){
    this.id=id;
    this.title=title;
    this.text=text;

    }
}



//function that reads the file and then split in array and adds it to object?

const chap1= new chapters_info(1,"Global climate change","text/chapterx.txt");
const chap2= new chapters_info(2,"Aviation","e users can sign up for future updates ssby submitting the completed form. The signup form must have at least four fields: first name, last name, email address and comments. You can add more fields if you wish. Form data handling (e.g. form validation) is necessary for this assignment. After the form is submitted, the user should be presented with a message co");
const chap3= new chapters_info(3, "Surface transport", "e users can sign up for future updates by submitting the completed form. The signup form must have at least four fields: first name, last name, email address and comments. You can add more fields if you wish. Form data handling (e.g. form validation) is necessary for this assignment. After the form is submitted, the user should be presented with a message co");

const chapters=[];
chapters.push(chap1);
chapters.push(chap2);
chapters.push(chap3);

chapters.map((item) => {

    console.log(`item ${item.id}`);
})

const sectionCenter = document.querySelector("#chapinfo");


function loadContent() {
    let displayItem = chapters.map((item) => {
        return `
        <div id="bigdiv"> 
        <id=${item.id} />
        <h4>${item.title}</h4>
        <div id=chapinfo">
        ${item.text}
        </div>
        </div>

     `;
    });
    displayItem=displayItem.join("");
    console.log(displayItem);
    sectionCenter.innerHTML=displayItem;
};
window.addEventListener("DOMContentLoaded", loadContent, false);



