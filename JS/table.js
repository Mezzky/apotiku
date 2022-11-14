// SIDEBAR
const navShow = document.querySelector('header')
const navToggle = document.querySelector('header nav h1')

navToggle.addEventListener('click', () => {
    navShow.classList.toggle('slide')
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

// Update Popup
const updateBtn = document.querySelectorAll('.table-page .table .btn .update')
const updateClose = document.getElementById('closeUpdate')
const updatePopup = document.getElementById('updatePopup')

updateBtn.forEach(el => {
    el.addEventListener('click', () =>{
        updatePopup.classList.add('update')
        overlay.classList.add('update')
    })
})

updateClose.addEventListener('click', () => {
    overlay.classList.remove('update')
    updatePopup.classList.remove('update')
})