
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
const comingsoon_modal_overlay = document.getElementById('modal_overlay');
const comingsoon_modal = document.getElementById('coming_soon_modal');

function openComingSoonModal() {
    comingsoon_modal_overlay.classList.add('active');
    comingsoon_modal.classList.add('active');
    body.style.overflow = "hidden";
}
function closeComingSoonModal() {
    comingsoon_modal_overlay.classList.remove('active');
    comingsoon_modal.classList.remove('active');
    body.style.overflow = "auto";
}