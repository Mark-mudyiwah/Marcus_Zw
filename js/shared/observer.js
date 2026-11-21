const target = document.querySelector('.about-section')

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('reveal')
    }
})

})

observer.observe(target)
