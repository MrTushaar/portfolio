
const body = document.querySelector('body');

// open and close mobile menu
const mobile_nav_overlay = document.getElementById('mobile_nav_overlay');
const mobile_nav_items = document.querySelectorAll('.mobile_nav_wrapper nav a');

function openMobileNav() {
    body.style.overflow = "hidden";
    mobile_nav_overlay.classList.add('active');
    mobile_nav_items.forEach(item => {
        item.classList.add('show');
    });
}
function closeMobileNav() {
    body.style.overflow = "auto";
    mobile_nav_overlay.classList.remove('active');
    mobile_nav_items.forEach(item => {
        item.classList.remove('show');
    });
}

// open and close coming soon modal
const comingsoon_modal_overlay = document.getElementById('comingsoon_modal_overlay');
const comingsoon_modal = document.getElementById('coming_soon_modal');

function openComingSoonModal() {
    body.style.overflow = "hidden";
    comingsoon_modal_overlay.classList.add('active');
    comingsoon_modal.classList.add('active');
}
function closeComingSoonModal() {
    body.style.overflow = "auto";
    comingsoon_modal_overlay.classList.remove('active');
    comingsoon_modal.classList.remove('active');
}

// open and close community modal
const community_modal_overlay = document.getElementById('community_modal_overlay');
const community_modal = document.getElementById('community_modal');
const community_item_one = document.querySelector('#community_modal .extracurricular.one');
// const community_item_two = document.querySelector('#community_modal .extracurricular.two');

function openCommunityModal() {
    body.style.overflow = "hidden";
    community_modal_overlay.classList.add('active');
    // community_modal.classList.add('active');
    community_item_one.classList.add('active');
    // community_item_two.classList.add('active');
}

function closeCommunityModal() {
    body.style.overflow = "auto";
    community_modal_overlay.classList.remove('active');
    // community_modal.classList.remove('active');
    community_item_one.classList.remove('active');
    // community_item_two.classList.remove('active');
}

// open and close experiences modal 
const experiences_modal_overlay = document.getElementById('experiences_modal_overlay');
const experiences_modal = document.getElementById('experiences_modal');
const experiences_item = document.querySelector('#experiences_modal .experiences');

function openExperiencesModal() {
    body.style.overflow = "hidden";
    experiences_modal_overlay.classList.add('active');
    // experiences_modal.classList.add('active');
    experiences_item.classList.add('active');
}

function closeExperiencesModal() {
    body.style.overflow = "auto";
    experiences_modal_overlay.classList.remove('active');
    // experiences_modal.classList.remove('active');
    experiences_item.classList.remove('active');
}