// VARIABLES

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

// Detail Popup
const detailBtn = document.querySelectorAll('.table-page .table .data #popupBtn')
const detailPopup = document.querySelectorAll('.table-page .table .data #popupDetail')

detailBtn.forEach(el => {
    el.addEventListener('click', () => {
        detailPopup.forEach(element => {
            element.classList.toggle('pop')
        })
    })
})

// Tambah Popup
const tambahPopup = document.getElementById('tambahPopup')
const overlay = document.getElementById('overlay')
const tambahBtn = document.getElementById('tambahBtn')
const tambahClose = document.getElementById('close')

tambahBtn.addEventListener('click', () => {
    overlay.classList.add('tambah')
    tambahPopup.classList.add('tambah')
})

tambahClose.addEventListener('click', () => {
    overlay.classList.remove('tambah')
    tambahPopup.classList.remove('tambah')
})