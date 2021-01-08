var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = 'Good Morning!';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon!';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening!';
else if (hrs >= 24 && hrs <= 6)
    greet = 'Good night!';

document.getElementById('greeting').innerHTML =
    greet + '<br>I am Yoann,<br>a multidisciplinary<br>designer.';

function countUp(maxNum, id, timeInterval) {
    let display = 0
    let interval = setInterval(function counting() {
        display += 5;
        document.getElementById(id).innerHTML = display

        if (display === maxNum
        ) {
            clearInterval(interval);
        }
    }, timeInterval);
}

countUp(1985, 'age', 30);

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

