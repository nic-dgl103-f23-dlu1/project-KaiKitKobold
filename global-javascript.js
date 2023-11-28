/* Most javascript code here has been taken and repurposed from
https://www.javatpoint.com/how-to-create-dropdown-list-using-javascript#:~:text=The%20tab%20is%20used,items%20and%20links%20inside%20it.
  */

function showHide() {
    var click = document.getElementById("nav-items");
    if (click.style.display === "none") {
        click.style.display = "block";
    }
    else {
        click.style.display = "none";
    }
}


function dropdownPerformers() {
    document.getElementById("dropdown1").classList.toggle("show");
}

function dropdownAudience() {
    document.getElementById("dropdown2").classList.toggle("show");
}

function dropdownInvolved() {
    document.getElementById("dropdown3").classList.toggle("show");
}

window.onmouseout = function(event) {
    if (!event.target.matches('.dropdown-options')) {  
        var dropdowns = document.getElementsByClassName("dropdown-content");  
        var i;  
        for (i = 0; i < dropdowns.length; i++) {  
            var openDropdown = dropdowns[i];  
            if (openDropdown.classList.contains('show')) {  
            openDropdown.classList.remove('show');  
            }  
        }  
    }  
}