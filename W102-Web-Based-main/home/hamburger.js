function toggleNav(event) { //function for togglign nav
    let links = document.querySelector(".mainNav"); 
    console.log(event); //logging events in cosole
    links.classList.toggle("showNav"); //appends showNav to mainNav
}

let hamburger = document.querySelector("#hamburger"); //select hamburger
hamburger.addEventListener("click",toggleNav, false); //adding events on click