
// const header_nav = document.querySelectorAll(".each_header_nav_link");
// const h = document.querySelector('.each_header_nav_link:hover');

// document.addEventListener('mouseenter', function() {
// for (const i of header_nav) {
//     let activa = i.classList.contains("active");
// if (i.classList.contains("active") && !(h.classList.contains('active'))) {
//     h.classList.add("active"); 
//     i.classList.remove("active"); 
// }
// active and hovered, add active;
// not active and hovered, add active on hovered and remove active from active. 
//     if (activa && h) {
//         activa.classList.add('active');
//     }
// }
// });


// const header_contact_btn = document.querySelector(".each_header_nav_link.contact");
// // header_contact_btn.addEventListener('mouseover', func());
// function func() {
//     header_contact_btn.innerHTML = "Email";
// }

// open and close coming soon modal
const body = document.querySelector('body');
const modal_overlay = document.querySelector('.modal_overlay');
const comingsoon_modal = document.getElementById('coming_soon_modal');

function openComingSoonModal() {
    body.style.overflow = "hidden";
    modal_overlay.classList.add('active');
    comingsoon_modal.classList.add('active');
}
function closeComingSoonModal() {
    body.style.overflow = "auto";
    modal_overlay.classList.remove('active');
    comingsoon_modal.classList.remove('active');
}

// open and close community modal
const community_modal_overlay = document.getElementById('community_modal_overlay');
const community_modal = document.getElementById('community_modal');
const community_item_one = document.querySelector('#community_modal .extracurricular.one');
const community_item_two = document.querySelector('#community_modal .extracurricular.two');

function openCommunityModal() {
    body.style.overflow = "hidden";
    community_modal_overlay.classList.add('active');
    community_modal.classList.add('active');
    community_item_one.classList.add('active');
    community_item_two.classList.add('active');
}

function closeCommunityModal() {
    body.style.overflow = "auto";
    community_modal_overlay.classList.remove('active');
    community_modal.classList.remove('active');
    community_item_one.classList.remove('active');
    community_item_two.classList.remove('active');
}

// open and close experiences modal 
const experiences_modal_overlay = document.getElementById('experiences_modal_overlay');
const experiences_modal = document.getElementById('experiences_modal');
const experiences_item_one = document.querySelector('#experiences_modal .experiences.one');

function openExperiencesModal() {
    body.style.overflow = "hidden";
    experiences_modal_overlay.classList.add('active');
    experiences_modal.classList.add('active');
    experiences_item_one.classList.add('active');
}

function closeExperiencesModal() {
    body.style.overflow = "auto";
    experiences_modal_overlay.classList.remove('active');
    experiences_modal.classList.remove('active');
    experiences_item_one.classList.remove('active');
}