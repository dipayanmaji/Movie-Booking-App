const genresBtn = document.getElementById("genres-btn");
const genresNav = document.getElementById("genres-nav");

genresBtn.addEventListener("click", ()=>{
    if(genresNav.style.transform == "translate(16rem)"){
        genresNav.style.transform= "translate(0)";
    }
    else{
        genresNav.style.transform= "translate(16rem)";
    }
})

genresNav.addEventListener("mouseleave", ()=>{
    genresNav.style.transform= "translate(0)";
})
