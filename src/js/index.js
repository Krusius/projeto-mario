
const modal = document.querySelector(".modal");
const botaoTrailer = document.querySelector(".botao-trailer");
const BotaoFecharModal = document.querySelector(".fechar-modal");
const linkdovideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");

}
botaoTrailer.addEventListener("click", () => {
    alternarModal()

    video.setAttribute("src", linkdovideo);

});

BotaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "");

});

