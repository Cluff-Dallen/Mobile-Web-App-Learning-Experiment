function f1() {
    var application = {
        firstname: document.getElementById("firstname").value,
        lastname: String(document.getElementById("lastname").value),
        age: String(document.getElementById("age").value),
        byear: String(document.getElementById("byear").value),
        degree: String(document.getElementById("degree").value),
        position: String(document.getElementById("position").value),
        aboutyourself: String(document.getElementById("aboutyourself").value)
    };



    if (application.firstname != "" && application.lastname != "" && application.age != "" && application.byear != "" && application.degree != "" && application.position != "" && application.aboutyourself != "") {


        localStorage.setItem('firstname', application.firstname);
        localStorage.setItem('lastname', application.lastname);
        localStorage.setItem('age', application.age);
        localStorage.setItem('byear', application.byear);
        localStorage.setItem('degree', application.degree);
        localStorage.setItem('position', application.position);
        localStorage.setItem('aboutyourself', application.aboutyourself);

        document.getElementById('local').innerHTML = "You previously submitted the following information on your application: <br> First Name: " + localStorage.getItem('firstname') +
            "<br>Last Name: " + localStorage.getItem('lastname') + "<br>Your Age: " + localStorage.getItem('age') + "<br>Your Birth Year: " + localStorage.getItem('byear') + "<br>Your degree: " + localStorage.getItem('degree') + "<br>Your position applied for: " + localStorage.getItem('position') + "<br>About yourself: " + localStorage.getItem('aboutyourself');
    } else {

        document.getElementById('local').innerHTML = "You previously submitted the following information on your application: <br> First Name: " + localStorage.getItem('firstname') +
            "<br>Last Name: " + localStorage.getItem('lastname') + "<br>Your Age: " + localStorage.getItem('age') + "<br>Your Birth Year: " + localStorage.getItem('byear') + "<br>Your degree: " + localStorage.getItem('degree') + "<br>Your position applied for: " + localStorage.getItem('position') + "<br>About yourself: " + localStorage.getItem('aboutyourself');
    }
}

function f2() {
    const square = document.getElementById('submit');

    square.style.background = '#DCE0D9';
}

function f3() {
    const square = document.getElementById('firstname');

    square.style.background = 'lightgrey';
}

function f4() {
    const square = document.getElementById('lastname');

    square.style.background = 'lightgrey';
}

function f5() {
    const square = document.getElementById('age');

    square.style.background = 'lightgrey';
}

function f6() {
    const square = document.getElementById('byear');

    square.style.background = 'lightgrey';
}

function f7() {
    const square = document.getElementById('degree');

    square.style.background = 'lightgrey';
}

function f8() {
    const square = document.getElementById('position');

    square.style.background = 'lightgrey';
}

function f9() {
    const square = document.getElementById('aboutyourself');

    square.style.background = 'lightgrey';
}