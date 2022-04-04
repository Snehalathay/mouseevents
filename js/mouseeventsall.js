const mouse = document.querySelector("#mydiv");

mouse.style.backgroundColor = "grey";
mouse.style.width = "200px";
mouse.style.height = "200px";

mouse.addEventListener("click" , e => {

 console.log("Left mouse clicked!");

 mouse.style.backgroundColor = "Yellow";

})

mouse.addEventListener("contextmenu", e => {
    console.log(" opened rightclick menu");
})
mouse.addEventListener("mouseover", e => {
    console.log("You entered the square!");
    mouse.style.backgroundColor = "purple";
})

mouse.addEventListener("mouseleave", e => {
    console.log("You left the square!");
    mouse.style.backgroundColor = "grey";
})

mouse.addEventListener("mousemove", e => {
    console.log("You are within the square!");
    
})
