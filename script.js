// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunctionn()};

function myFunctionn() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function myFunction2() {
    var element = document.body;
    element.classList.toggle("dark-mode2");
}
function myFunction3() {
    var element = document.body;
    element.classList.toggle("dark-mode3");
}
function myFunction4() {
    var element = document.body;
    element.classList.toggle("dark-mode4");
}
function myFunction5() {
    var element = document.body;
    element.classList.toggle("dark-mode5");
}
function myFunction6() {
    var element = document.body;
    element.classList.toggle("dark-mode6");
}
function myFunction7() {
    var element = document.body;
    element.classList.toggle("dark-mode7");
}
function myFunction8() {
    var element = document.body;
    element.classList.toggle("dark-mode8");
}
function myFunction9() {
    var element = document.body;
    element.classList.toggle("dark-mode9");
}


