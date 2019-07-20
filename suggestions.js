function f1() {
    var newItem = document.createElement('li');
    var text = document.createTextNode(document.getElementById("suggest").value);
    newItem.appendChild(text);
    document.body.appendChild(newItem);

    var list = document.getElementById("suggestionsList");
    list.insertBefore(newItem, list.childNodes[100]);
}

function f2() {
    var list = document.getElementById("suggestionsList");
    list.removeChild(list.lastChild);
}

function f3() {
    var textnode = document.createTextNode(document.getElementById("suggest").value);

    var list = document.getElementById("suggestionsList").lastChild;
    list.replaceChild(textnode, list.lastChild);
}