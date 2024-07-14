//console//
// console.log("hello");
// console.log(1+3);
// console.log("6")
// console.error("ithu error daww")
// console.warn("warning")


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tbutton").addEventListener("click", function() {
        document.querySelector(".container").classList.toggle("sidebar-open");
    });
});



// addEventListener -- > it occurs perform of events or actions 
