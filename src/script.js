import * as gsap from "https://cdn.skypack.dev/gsap@3.6.1";
//gsap.to(mask.$el, 0.4, {
  //      webkitMaskPosition: `${(x - w) - left}px ${(y - w) - top}px`
    //  })


const cards = document.querySelectorAll('.card')

cards.forEach(card => {
  card.addEventListener('mouseenter', (event) => {
      const mask = card.querySelector('.masked').style.opacity = 1
  })
  
  
  card.addEventListener('mouseleave', (event) => {
      const mask = card.querySelector('.masked').style.opacity = 0
  })
  
  card.addEventListener('mousemove', (event) => {
      const w = 300
      const { clientX, clientY } = event
      const mask = card.querySelector('.masked')
      const { left, top } = mask.getBoundingClientRect()

      gsap.gsap.to(mask, 0.2, {
        webkitMaskPosition: `${(clientX - w) - left}px ${(clientY - w) - top}px`
      })
  })  
})

