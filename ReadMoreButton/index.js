const readMoreBtn = document.querySelector('.readMoreBtn');
const text = document.querySelector('.text');
readMoreBtn.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'Read More'){
