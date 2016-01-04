chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    sessionStorage.oldword = message.oldword;
    sessionStorage.newword = message.newword;
    localStorage.hello = message.hello;
    sendResponse("back:" + sessionStorage.oldword + ":" + localStorage.hello);
});

function msg() {
    return localStorage.oldword + ":" + localStorage.newword;
}

