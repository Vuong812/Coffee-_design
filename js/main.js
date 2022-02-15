const menu_btn = document.getElementById("menu-btn")
const navbar = document.querySelector(".navbar")

menu_btn.onclick = () =>{
    menu_btn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
    menu_btn.classList.remove('fa-times');
    navbar.classList.remove('active')
}
document.querySelectorAll('.image-slider img').forEach(item =>{
    item.onclick = () =>{
        var src = item.getAttribute('src')
        document.querySelector('.main-home-img').src= src;
    }
})
      