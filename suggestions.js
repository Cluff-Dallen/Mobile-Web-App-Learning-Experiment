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

function f4() {
    document.getElementById("submitSuggest").style.background = "grey";
}

function f5() {
    document.getElementById("removeSuggest").style.background = "grey";
}

function f6() {
    document.getElementById("replaceSuggest").style.background = "grey";
}

function f7() {
    document.getElementById("suggest").style.background = "grey";
}