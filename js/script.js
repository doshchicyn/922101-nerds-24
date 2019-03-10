var sendbtn = document.querySelector (".send-us-btn");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".close-modal");
var form = popup.querySelector("form");
var cln_name = popup.querySelector("[name=cln_name]");
var email = popup.querySelector("[name=email]");
var text_letter = popup.querySelector("[name=text-letter]");

sendbtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    cln_name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!cln_name.value || !email.value || !text_letter.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        }
    }
});