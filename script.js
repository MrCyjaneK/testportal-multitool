// ==UserScript==
// @name         Testportal Multi Tool
// @namespace    https://*.testportal.pl/
// @version      3.0.5
// @description  Ha-ha H@ck0wansko xd
// @author       Czarek Nakamoto (mrcyjanek.net)
// @updateURL    https://git.mrcyjanek.net/mrcyjanek/testportal-multitool/raw/branch/main/script.js
// @downloadURL  https://git.mrcyjanek.net/mrcyjanek/testportal-multitool/raw/branch/main/script.js
// @match        https://*.testportal.net/*
// @match        https://*.testportal.pl/*
// @grant        none
// ==/UserScript==

//(function() {
//    'use strict';
console.log("[TESTPORTAL MULTITOOL] started")
const original = RegExp.prototype.test;
RegExp.prototype.test = function (s) {
    const string = this.toString();
    if (string.includes("native code") && string.includes("function")) {
        return true;
    }
    const r = original.call(this, s);
    return r;
};

logToServer = function(x) { console.log(x) }
function initPage() {
    if (!window.location.href.includes("LoadTestStart.html")) {
        return
    }
    //if (document.getElementsByClassName('test-card-body').length == 1) {

    //} else {
    document.getElementsByClassName('test-card-body')[0].innerHTML += "Witaj byczq, skoncentruj sie na tescie, ale nie za bardzo, tak na luzie. Wszystko będzie git.<br />Mozesz wychodzic poza karte, szukac w przegladarce, lub innej aplikacji, i robic wszystkie te cuda, nauczyciel sie nie dowie.<br /> Btw hopsaj na <a href=\"https://discord.gg/KhMuN7tJfF\" target=\"_blank\">discorda</a> <br />Z fartem. <br />~ Wiesz kto"
    document.getElementsByClassName('test-card-content-with-icon__icon')[0].innerHTML = "<img src=\"https://git.mrcyjanek.net/mrcyjanek/testportal-multitool/raw/branch/main/static/error.svg\" width=\"75\">"
    //}
}
function timeLimit() {
    window.startTime = Infinity;

    document.hasFocus = () => {
        return true;
    };
    document.getElementById("remaining_time_content").outerHTML = "";
    document.getElementById("remaining_time_label").style.color = "#0bc279";
    document.getElementById("remaining_time_label").style.fontWeight = 600;
    document.getElementById("remaining_time_label").innerText = "Czas na odpowiedz: Tyle, ile ci potrzeba."
}
function answerSearch() {
    let hackClass = ["answer_body", "question_essence"]
    hackClass.forEach(c => {
        let elms = document.getElementsByClassName(c)
        for (let i = 0; i < elms.length; i++) {
            console.log(elms[i])
            let text = elms[i].innerText
            if (text == "") {
                continue
            }
            elms[i].innerHTML += `<a target="_blank" href="https://duckduckgo.com/?q=${ encodeURIComponent(text) }">DDG</a> | <a target="_blank" href="https://google.com/search?q=${ encodeURIComponent(text) }&igu=1">Google</a>`
            //https://www.google.com/searchbyimage?igu=1&image_url='+encodeURI(a.src)+'
        }
    })
}
function imageSearch() {
    var imgs = document.getElementsByTagName('img');
    //imgs = [] //todo
    for (let i = 0; i < imgs.length; i++) {
        ((imgs, i) => {
            setTimeout(() => {
                if (imgs[i].innerHTML.includes("logo_wide logo_default")) {
                    return
                }
                if (imgs[i].getAttribute("src").includes('data:image')) {
                    imgs[i].setAttribute("src", imgs[i].getAttribute("data-src"))
                    imgs[i].setAttribute("class", "")
                }
                imgs[i].onclick = ((a) => { a = a.target; window.open("https://www.google.com/searchbyimage?igu=1&image_url="+encodeURI(a.src), '_blank');})

            })
        })(imgs, i)
    }
}
//setTimeout(initPage, 100)
if (!window.location.href.includes("LoadTestStart.html")) {
    setTimeout(timeLimit, 0)
    setTimeout(answerSearch, 100)
    setTimeout(imageSearch, 200)
}
//})();
