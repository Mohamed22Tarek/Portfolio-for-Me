// Active Link
const links =document.querySelectorAll('#link-active');
links.forEach(link=>{
    link.addEventListener('click',function(){
        links.forEach(item=>{
            item.classList.remove('active');
        });
        this.classList.add('active')
        
    })

});

// Show Navbar For Mobile
const btn =document.querySelector('#btn-icon')
const navLink=document.querySelector(".nav-links")
console.log(btn);
btn.addEventListener("click", ()=>{
    navLink.classList.toggle('show')
    
})




// animations
AOS.init({
  duration: 1000,
  once: true
});

