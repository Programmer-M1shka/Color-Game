let winnerText = document.getElementById("winningText")
let easy = document.getElementById("easy")
let hard = document.getElementById("hard")
let result = document.getElementById("result")
let start = document.getElementById("start-game")
let allBoxes = document.querySelectorAll(".Game-box")
let section = document.querySelector("section")
let winCount = document.getElementById("count")

let gameLogic = true

let boxNumber = 6

let colorList = []


function fillColors(quantity) {
    for(let i = 0; i < quantity; i++ ) {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        let rgb = `rgb(${r}, ${g}, ${b})`
        colorList.push(rgb)
    }
}


function getRandomColor(list) {
    let randomColorIndex = Math.round(Math.random() * (list.length - 1))
    return list[randomColorIndex]
}

easy.addEventListener("click", function(){
    boxNumber = 3
    section.style.height = "200px"
    section.style.overflow = "hidden"
    startGame()
    
})

hard.addEventListener("click", function(){
    boxNumber = 6
    section.style.height = "auto"
    section.style.overflow = "none"
    startGame()
   
})

function startGame() {
    fillColors(boxNumber)
console.log(colorList);
  winnerText.innerText = getRandomColor(colorList)
  result.innerText = "Result"
  result.className = ""
  gameLogic = true
    allBoxes.forEach(item => {
        item.style.visibility = "visible"
        item.style.opacity = 1
        item.style.backgroundColor = colorList.pop()
        item.style
       // console.log(colorList);
        item.addEventListener("click", function() {
            
            if(gameLogic) {
                if(winnerText.innerText == item.style.backgroundColor) {
                    result.className = "success"
                    result.innerText = "Success"
                    winCount.innerText++
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "გილოცავ!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      gameLogic = false
                    }
        
                    else {
                        result.className = "error"
                        result.innerText = "Failed"
                        item.style.visibility = "hidden"
                        item.style.opacity = 0
                    }
            }
            
        })
    })
}