// VARIABLES

// SIDEBAR
const navShow = document.querySelector('header')
const navToggle = document.querySelector('header nav h1')

navToggle.addEventListener('click', () => {
    navShow.classList.toggle('slide')
})

// Detail Popup
const detailBtn = document.querySelectorAll('.table-page .table .data #popupBtn')
const detailPopup = document.querySelectorAll('.table-page .table .data #popupDetail')

detailBtn.forEach(el => {
    el.addEventListener('click', () => {
        // detailPopup.forEach(element => {
        //     element.classList.toggle('pop')
        // })
        detailPopup.classList.toggle('pop')
    })
})

// for(i = 0; i <= detailBtn.length; i++){
//     btn = detailBtn[i]
//     btn.addEventListener('click', () => {
//         for (a = 0; a <= detailPopup.length; a++){
//             index = detailPopup[a]
//             if(btn == index){
//                 index.classList.toggle('pop')
//             } else{
//                 console.log("gagal")
//             }
//         }
//     })
// }

// for (a = 0; a < detailBtn.length; a++){
//     console.log(a);
//     loop[a]
// }

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
const updateBtn = document.getElementById('update')
const updateClose = document.getElementById('close')

updateBtn.addEventListener('click', () => {
    overlay.classList.add('update')
    tambahPopup.classList.add('update')
})

updateClose.addEventListener('click', () => {
    overlay.classList.remove('update')
    tambahPopup.classList.remove('update')
})