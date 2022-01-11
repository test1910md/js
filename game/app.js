const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
const timeList=document.querySelector('#time_list')
const timeEl=document.querySelector('#time')
const board=document.querySelector('#board')

const colors= ['#F38DBB', '#F74997', '#BB467A', '#F6AFCF', '#FA197E', '#CD558B', '#F1A0F4', '#EF93AB', '#D37FEF']


let time=0
let score=0

startBtn.addEventListener('click', (event)=> {
    event.preventDefault()
    screens[0].classList.add('up')

})

timeList.addEventListener('click', (event)=>{
    if(event.target.classList.contains('time-btn')){
        // console.log(parseInt(event.target.getAttribute('data-time')))
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event=>{
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame(){
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)

}

function decreaseTime(){
    if (time===0){
        finishGame()

    }
    else{
        let current = --time
    if (current<10){
        current=`0${current}`
    }
    setTime(current)

    }
    

}

function setTime(value){
    timeEl.innerHTML=`00:${value}`

}

function finishGame(){
    timeEl.parentNode.remove()
    board.innerHTML=`<h1>Счет: <span class='primary'>${score}</span></h>`
}

function createRandomCircle(){
    const circle=document.createElement('div')
    circle.classList.add('circle')
    const size = getRandomNumber(10, 60)
    const {width, height}=board.getBoundingClientRect()
    const x=getRandomNumber(0, width-size)
    const y=getRandomNumber(0, height-size)
    const color =getRandomColor()
    circle.style.backgroundColor = color
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.top=`${y}px`
    circle.style.left =`${x}px`
    board.append(circle)

}

function getRandomNumber(min, max){
   return Math.round(Math.random() * (max-min) + min)
}

function getRandomColor(){
    const index= Math.floor(Math.random() * colors.length)
    return colors[index]
    
}