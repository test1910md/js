const up_btn=document.querySelector('.up-button')
const down_btn=document.querySelector('.down-button')

const sidebar=document.querySelector('.sidebar')
const mainslide=document.querySelector('.main-slide')
const container =document.querySelector('.container')
const slide_count=mainslide.querySelectorAll('div').length

let active_slide_index=0

sidebar.style.top=`-${(slide_count-1)*100}vh`

up_btn.addEventListener('click', ()=>{
    change_slide('up')
})


down_btn.addEventListener('click', ()=>{
    change_slide('down')
})


function change_slide(direction){
    if (direction ==='up') {
        active_slide_index++
        if (active_slide_index===slide_count){
            active_slide_index=0
        }

    }
    else if (direction ==='down') {
        active_slide_index--
        if (active_slide_index<0){
            active_slide_index=slide_count-1
        }

    }

    const height = container.clientHeight
    mainslide.style.transform= `translateY(-${active_slide_index*height}px)`
    sidebar.style.transform= `translateY(${active_slide_index*height}px)`
    
}