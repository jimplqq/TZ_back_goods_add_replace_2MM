//var city = localStorage.city || 'beijing';
//document.getElementById('city').value = city;

document.getElementById('saveValue').onclick = function () {
    localStorage.oldword = document.getElementById('oldword').value;
    localStorage.newword = document.getElementById('newword').value;
    alert('±£´æ³É¹¦¡£');
    chrome.runtime.sendMessage({oldword: localStorage.oldword, newword: localStorage.newword}, function (response) {
        alert(response)
    });
}

document.getElementById('getValue').onclick = function () {
    alert(localStorage.oldword + ":" + localStorage.newword)
}