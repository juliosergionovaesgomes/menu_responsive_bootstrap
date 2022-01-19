document.getElementById('btn_open').addEventListener('click',e=>{
    document.getElementById('nav-menu').classList.toggle('show')
})

document.querySelectorAll('.nav-link').forEach(e=>
    e.addEventListener('click',e=>{
    document.getElementById('nav-menu').classList.remove('show')
}))