let pageOverlay = document.getElementById("page-overlay");

//Modal de SKILLS;
let openModalSkill = document.querySelector(".open-modal-skill");
let btnOpenModalSkill = document.querySelector(".btn-open-modal-skill");
let closeModalSkill = document.getElementById("close-skill");
let modalSkill = document.getElementById("modal-skills");


function openModalSkills() {
    modalSkill.classList.add('active-modal-skill');
    pageOverlay.classList.add('active-page-overlay');
}

openModalSkill.addEventListener('click', openModalSkills);
btnOpenModalSkill.addEventListener('click', openModalSkills);

closeModalSkill.addEventListener('click', () => {
    modalSkill.classList.remove('active-modal-skill');
    pageOverlay.classList.remove('active-page-overlay');
});


//Modal de CONTACT;
let openModalContact = document.querySelector(".open-modal-contact");
let btnOpenModalContact = document.querySelector(".btn-open-modal-contact");
let closeModalContact = document.getElementById("close-contact");
let modalContact = document.getElementById("modal-contact");

function openModalContacts() {
    modalContact.classList.add('active-modal-contact');
    pageOverlay.classList.add('active-page-overlay');
}

openModalContact.addEventListener('click', openModalContacts);
btnOpenModalContact.addEventListener('click', openModalContacts);

closeModalContact.addEventListener('click', () => {
    modalContact.classList.remove('active-modal-contact');
    pageOverlay.classList.remove('active-page-overlay');
});