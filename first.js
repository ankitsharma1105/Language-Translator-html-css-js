var inputText = document.querySelector('#input-text');
var outputText = document.querySelector('#output-text');
var buttonTranslate = document.querySelector('#btn-translate');
var apiUrl = "https://api.funtranslations.com/translate/minion.json";

function errorHandle(error) {
    alert('Error occurred')
    console.log("error occurred", error);
}

function clickHandler() {
    var text = inputText.value;
    var updatedUrl = apiUrl + "?text=" + text;
    fetch(updatedUrl).then(response =>
        response.json()).then(json =>
            outputText.innerText =
            (json.contents.translated)).catch(errorHandle);
}
buttonTranslate.addEventListener("click", clickHandler); 
