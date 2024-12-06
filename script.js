let accordion = [...document.querySelectorAll(".faq__accordion-item")]

function toggleAcc(){
    let el = event.target
    if (el.classList.contains("faq__accordion-header")){
        el.parentElement.children[0].classList.toggle("accordion-header_closed")
        el.parentElement.children[1].classList.toggle("accordion_closed")
        
    } 
    if (el.parentElement.classList.contains("faq__accordion-header")){
        el.parentElement.parentElement.children[0].classList.toggle("accordion-header_closed")
        el.parentElement.parentElement.children[1].classList.toggle("accordion_closed")
    }
    if (el.parentElement.parentElement.classList.contains("faq__accordion-header")){
        el.parentElement.parentElement.parentElement.children[0].classList.toggle("accordion-header_closed")
        el.parentElement.parentElement.parentElement.children[1].classList.toggle("accordion_closed")
    }

}


accordion.forEach((item)=>{
    item.addEventListener("click", toggleAcc)
})

