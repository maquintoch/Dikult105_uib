/* ================================================================= */
/* Quick hack for switching a CSS file by mouse click. (C) DJ 8/2012 */
/* - Changed names and added local storage to ensure last CSS chosen */
/* is active when page reloads. Changes (C) Kine Bergseth 9/2018 */
/* - Simplified syntax, removed redundant file call. (C) DJ 10/2019 */
/* - Changed localStorage to allow multiple projects. (C) DJ 11/2019 */
/* ================================================================= */
var currentURL = document.location.href;
var stylesheet = document.getElementById("stylesheet");
function switchCSS(first, second) {
    var href = stylesheet.getAttribute("href");
    var newHref = href == first ? second : first;
    localStorage.setItem(currentURL, newHref);
    stylesheet.setAttribute("href", newHref);
}
document.addEventListener("DOMContentLoaded", function() {
    var stored_css = localStorage.getItem(currentURL);
    if (!(typeof stored_css === 'undefined' || stored_css === null)) {
        stylesheet.href = stored_css;
    }
});
/* ================================================================= */


