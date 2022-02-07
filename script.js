// ==UserScript==
// @name         Testportal Multi Tool
// @namespace    https://*.testportal.pl/
// @version      3.0.0
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
        document.getElementsByClassName('test-card-body')[0].innerHTML = "Witaj byczq, skoncentruj sie na tescie, ale nie za bardzo, tak na luzie. Wszystko będzie git. Btw hopsaj na <a href=\"https://discord.gg/KhMuN7tJfF\" target=\"_blank\">discorda</a> <br />Z fartem. <br />~ Wiesz kto"
    }
    function timeLimit() {
        window.startTime = Infinity;

        document.hasFocus = () => {
            return true;
        };
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
                imgs[i].onclick = ((a) => { a = a.target; window.open("https://www.google.com/searchbyimage?igu=1&image_url="+encodeURI(a.src), '_blank');})
            },333)
        })(imgs, i)
    }
    }
    setTimeout(initPage, 100)
    if (window.location.href.includes("LoadTestStart.html")) {
        return
    }
    setTimeout(timeLimit, 0)
    setTimeout(answerSearch, 100)
    setTimeout(imageSearch, 200)
//})();
