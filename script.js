const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//opening modal fn
const openModal = () => {
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
};

//closing modal function
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
}