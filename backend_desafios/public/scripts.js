const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll(".card")
const course = document.querySelector('.course')

// Icons

const exit = document.querySelector('.exit')
const fullscreen = document.querySelector('.fullscreen')

for (let card of cards ){
  card.addEventListener("click",function(){
    
    const webId = card.getAttribute("id")
    window.location.href = `courses/${webId}`
  })
}

course.addEventListener('click', function(){
  // Pegando o link
  console.log('BOmmmmmmmmmmmmmmmm')
  const idLink =  course.getAttribute('id')
  modalOverlay.classList.add('active');

  modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${idLink}`
})


modalOverlay.querySelector('.close-modal').addEventListener('click',function(){
  modalOverlay.classList.remove('active');
  modal.classList.remove('fullscreen')
  fullscreen.classList.remove('disable')
  exit.classList.remove('active')
})
/*Expandindo o modal*/
document.querySelector(".fullscreen").addEventListener("click",function(){
  if (!(modal.classList.contains('fullscreen'))){
    modal.classList.add('fullscreen')
    fullscreen.classList.add('disable')
    exit.classList.add('active')
  }
})
document.querySelector('.exit').addEventListener('click',function(){
  if (modal.classList.contains('fullscreen')){
    modal.classList.remove('fullscreen')
    fullscreen.classList.remove('disable')
    exit.classList.remove('active')
  }
})