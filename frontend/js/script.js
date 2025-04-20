const menuBtn=document.querySelector(".menu");
const closeBtn=document.querySelector(".close");
const menu=document.querySelector(".vertical-nav");
const downloadBtn=document.querySelector(".fa-chevron-down");
const uploadBtn=document.querySelector(".fa-chevron-up");
const dropdownMenu=document.querySelector(".dropdown-menu");
menuBtn.addEventListener("click",()=>{
    menu.style.display="flex";
});
closeBtn.addEventListener("click",()=>{
    menu.style.display="none";
});
downloadBtn.addEventListener("click",()=>{
    downloadBtn.style.display="none";
    uploadBtn.style.display="block";
    dropdownMenu.style.display="block";
});
uploadBtn.addEventListener("click",()=>{
    dropdownMenu.style.display="none";
    uploadBtn.style.display="none";
    downloadBtn.style.display="block";
});