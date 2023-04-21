//Modal de SKILLS;
let openModalSkill = document.querySelector(".open-modal-skill");
let btnOpenModalSkill = document.querySelector(".btn-open-modal-skill");
let closeModalSkill = document.getElementById("close-skill");
let modalSkill =  document.getElementById("modal-skills");
let pageOverlay = document.getElementById("page-overlay");

function openModal() {
    modalSkill.classList.add('active-modal-skill');
    pageOverlay.classList.add('active-page-overlay');
}

openModalSkill.addEventListener('click', openModal);
btnOpenModalSkill.addEventListener('click', openModal);

closeModalSkill.addEventListener('click', () => {
    modalSkill.classList.remove('active-modal-skill');
    pageOverlay.classList.remove('active-page-overlay');
});
