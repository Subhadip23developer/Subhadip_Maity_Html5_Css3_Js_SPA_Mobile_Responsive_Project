let toggleopen=document.getElementById("navbar");
let fabars=document.getElementById("fabars");


const opennav=()=>{
    toggleopen.className="openbar";
    fabars.style.display="none";
}
const closenav=()=>{
    toggleopen.className="closebar";
    fabars.style.display="block";
}

function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  function hover() {
    clearInterval(a);
    clearInterval(b);
  }

  function unhover() {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();


let slides = document.querySelectorAll(".MiniBox");
let index = 0;

function next(){
slides[index].classList.remove("active");
index=(index+1)%slides.length;
slides[index].classList.add("active");
}
function prev(){
slides[index].classList.remove("active");
index=(index-1)%(index+1)%slides.length;
slides[index].classList.add("active");
}



let subhadip=document.getElementById("hrt");
const hrtclick=()=>{
  if(subhadip.style.color=="red"){
    subhadip.style.color="white";
  }else{
    subhadip.style.color="red";
  }
}
let subhadip1=document.getElementById("hrt1");
const hrtclick1=()=>{
  if(subhadip1.style.color=="red"){
    subhadip1.style.color="white";
  }else{
    subhadip1.style.color="red";
  }
}
let subhadip2=document.getElementById("hrt2");
const hrtclick2=()=>{
  if(subhadip2.style.color=="red"){
    subhadip2.style.color="white";
  }else{
    subhadip2.style.color="red";
  }
}
let subhadip3=document.getElementById("hrt3");
const hrtclick3=()=>{
  if(subhadip3.style.color=="red"){
    subhadip3.style.color="white";
  }else{
    subhadip3.style.color="red";
  }
}
let subhadip4=document.getElementById("hrt4");
const hrtclick4=()=>{
  if(subhadip4.style.color=="red"){
    subhadip4.style.color="white";
  }else{
    subhadip4.style.color="red";
  }
}
let subhadip5=document.getElementById("hrt5");
const hrtclick5=()=>{
  if(subhadip5.style.color=="red"){
    subhadip5.style.color="white";
  }else{
    subhadip5.style.color="red";
  }
}
let subhadip6=document.getElementById("hrt6");
const hrtclick6=()=>{
  if(subhadip6.style.color=="red"){
    subhadip6.style.color="white";
  }else{
    subhadip6.style.color="red";
  }
}
let subhadip7=document.getElementById("hrt7");
const hrtclick7=()=>{
  if(subhadip7.style.color=="red"){
    subhadip7.style.color="white";
  }else{
    subhadip7.style.color="red";
  }
}