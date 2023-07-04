 const toggleButton=document.getElementById('navs-toggle');
 const navlinks=document.getElementById('nav-links');
 toggleButton.addEventListener('click',() =>{
    navlinks.classList.toggle('active');
 })