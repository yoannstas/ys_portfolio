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



