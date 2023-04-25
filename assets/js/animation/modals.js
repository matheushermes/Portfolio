let pageOverlay = document.getElementById("page-overlay");

//MODAL DE HABILIDADES;
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


//MODAL DE CONTATO;
let openModalContact = document.querySelector(".open-modal-contact");
let btnOpenModalContact = document.querySelector(".btn-open-modal-contact");
let btnOpenModalContact2 = document.querySelector(".btn-open-modal-contact-2")
let closeModalContact = document.getElementById("close-contact");
let modalContact = document.getElementById("modal-contact");

function openModalContacts() {
    modalContact.classList.add('active-modal-contact');
    pageOverlay.classList.add('active-page-overlay');
}

openModalContact.addEventListener('click', openModalContacts);
btnOpenModalContact.addEventListener('click', openModalContacts);
btnOpenModalContact2.addEventListener('click', openModalContacts)

closeModalContact.addEventListener('click', () => {
    modalContact.classList.remove('active-modal-contact');
    pageOverlay.classList.remove('active-page-overlay');
});

//MODAL DE PROJETOS;
let openModalProject = document.querySelector(".open-modal-project");
let btnOpenModalProject = document.querySelector(".btn-open-modal-project");
let btnOpenModalProject2 = document.querySelector(".btn-open-modal-project-2")
let closeModalProject = document.getElementById("close-project");
let modalProject = document.getElementById("modal-projects");

function openModalProjects() {
    modalProject.classList.add('active-modal-project');
    pageOverlay.classList.add('active-page-overlay');
}

openModalProject.addEventListener('click', openModalProjects);
btnOpenModalProject.addEventListener('click', openModalProjects);
btnOpenModalProject2.addEventListener('click', openModalProjects);

closeModalProject.addEventListener('click', () => {
    modalProject.classList.remove('active-modal-project');
    pageOverlay.classList.remove('active-page-overlay');
});
