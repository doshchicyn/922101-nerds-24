var sendbtn = document.querySelector (".send-us-btn");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".close-modal");

sendbtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});