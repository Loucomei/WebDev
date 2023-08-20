class Lesson {

    constructor(id, title, category, day, img, desc) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.day = day;
        this.img = img;
        this.desc = desc;
    };

}

const lessons = [];


const yoga1 = new Lesson(
    id = 1,
    title = "Gental Hatha Yoga",
    category = "yoga",
    day = "Monday",
    img = "images/yoga1.jpg",
    desc = "Gentle yoga is performed at a slower pace, with less intense positions, and usually includes extended time for meditation, yogic breath work, and relaxation."
);

const yoga2 = new Lesson(
    id = 2,
    title = "Vinyasa Yoga",
    category = "yoga",
    day = "Tuesday",
    img = "images/yoga2.jpg",
    desc = "Vinyasa is a style of yoga characterised by stringing postures together so that you move from one to another, seamlessly, using breath."
);

const yoga3 = new Lesson(
    id = 3,
    title = "Restorative Yoga",
    category = "yoga",
    day = "Friday",
    img = "images/yoga3.jpg",
    desc = "Vinyasa is a style of yoga characterised by stringing postures together so that you move from one to another, seamlessly, using breath."
);

const yoga4 = new Lesson(
    id = 4,
    title = "Iyengar Yoga",
    category = "yoga",
    day = "Thursday",
    img = "images/yoga4.jpg",
    desc = "Restorative yoga is a restful practice that is all about slowing down and opening your body through passive stretching"
);

const yoga5 = new Lesson(
    id = 5,
    title = "Reformer Pilates",
    category = "pilates",
    day = "Friday",
    img = "images/pilate1.jpg",
    desc = "Pilates exercises done with some special types of machines are known as reformer Pilates."
);

const yoga6 = new Lesson(
    id = 6,
    title = "Clinical  Pilates",
    category = "pilates",
    day = "Saturday",
    img = "images/pilate2.jpg",
    desc = "Clinical Pilates is a therapeutic exercise offered by some qualified physiotherapists as a part of treatment for various injuries and health conditions."
);

const yoga7 = new Lesson(
    id = 7,
    title = "Classical Pilates",
    category = "pilates",
    day = "Sunday",
    img = "images/pilate3.jpg",
    desc = "Classic Pilates is the original form of Pilates that is based on a sequence of exercises"
);

const yoga8 = new Lesson(
    id = 8,
    title = "Winsor Pilates",
    category = "pilates",
    day = "Monday",
    img = "images/yoga5.jpg",
    desc = "Developed by Mari Winsor, Winsor Pilates emphasizes breathing coordination and targets the â€œband of energy"
);




lessons.push(yoga1);
lessons.push(yoga2);
lessons.push(yoga3);
lessons.push(yoga4);
lessons.push(yoga5);
lessons.push(yoga6);
lessons.push(yoga7);
lessons.push(yoga8);


console.log(lessons.length);

lessons.map((item) => {
    console.log(`item ${item.id}`)
});

const sectionCenter = document.querySelector("#section-center")

function loadContent() {
    let displayItem = lessons.map((item) => {
        return `
        <article class="item">
        <img src=${item.img} alt=${item.title} id=${item.id} class="photo"/>
        <div class="item-info">
        <div class="item-header">
            <h4>${item.title}</h4>
            <h4 class="day></i class"fa-calendar-days"></i>${item.day}</h4>
        </div>
            <p class="item-text">
            ${item.desc}
            </p>

        </div>
        </div id="result"></div>

        </article>
        `;
    })
    displayItem = displayItem.join("");
    console.log(displayItem);
    sectionCenter.innerHTML = displayItem;
    document.querySelector("section").addEventListener("click", clickHandler);
};

function clickHandler(e) {
    console.log(e.currentTarget);
    console.log(e.target);
    if (e.currentTarget != e.target) {
        const targetID = e.target.id;
        console.log(targetID);
        const item = lessons.find(i => i.id == targetID);
        console.log(item.title);
        if (typeof item !== "undefined") {
            alert(item.desc);
        }
    }
}

window.addEventListener("DOMContentLoaded", loadContent, false)




//page 13