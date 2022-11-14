// SIDEBAR
const navShow = document.querySelector('header')
const navToggle = document.querySelector('header nav h1')

navToggle.addEventListener('click', () => {
    navShow.classList.toggle('slide')
})

// Profile Dashboard Popup
const profileBtn = document.getElementById('profileBtn')
const popupProfile = document.getElementById('profilePopup')

profileBtn.addEventListener('click', () => {
    popupProfile.classList.toggle('show')
})