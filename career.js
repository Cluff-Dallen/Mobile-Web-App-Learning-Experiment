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

    document.getElementById("submittedText").innerHTML = "Your First Name: " + application.firstname +
        "<br> Your Last Name: " + application.lastname +
        "<br> Your Age: " + application.age +
        "<br> Your Birth Year: " + application.byear +
        "<br> Your Degree is in: " + application.degree +
        "<br> Applying for the position of: " + application.position +
        "<br> About yourself: " + application.aboutyourself;

    var applicationForm = {
        'firstname': 'Dallen',
        'lastname': 'Cluff',
        'age': '21',
        'byear': '1997',
        'degree': 'Software Engineering',
        'aboutyourself': 'Stuff about me'
    };

    sessionStorage.setItem('applicationForm', JSON.stringify(applicationForm));

    var retrievedData = sessionStorage.getItem('applicationForm');

    var applicationInfo = JSON.parse(retrievedData)
    document.getElementById('local').innerHTML = "hello: " + applicationInfo.firstname;
}