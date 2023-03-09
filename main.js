
//유저가 1-100범위 밖의 숫자를 입력하면 경고글. 하지만 기회 깎지 않는다
//같은 숫자 입력하면 경고글. 기회 안깎음

let answer = 0
let goButton = document.getElementById("go-button")
let resetButton = document.getElementById("reset-button")
let userNum = document.getElementById("num")
let resultBox = document.getElementById("result")
let resultImg = document.getElementById("image")
let chances = 5
let chancesBox = document.getElementById("chances")
let history = []


goButton.addEventListener("click", go)
resetButton.addEventListener("click", reset)
userNum.addEventListener("focus",function(){
    userNum.value = "";
});

function answerNum(){
    answer = Math.floor(Math.random() * 100)+1
    console.log("정답", answer)
}

function go(){
    let userValue = userNum.value
    console.log(userValue)

    if(userValue < 1 || userValue > 100){
        resultBox.textContent = "1과 100사이 숫자를 입력해주세요!"
        return;
    }

    if(history.includes(userValue)){
        resultBox.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요!"
        return;
    }

    chances --;
    console.log("기회", chances)
    chancesBox.textContent = `남은기회 : ${chances} 번`


    

    if(userValue < answer){
        resultImg.src = "https://media.istockphoto.com/id/1403409986/photo/closeup-of-unknown-group-of-diverse-businesspeople-showing-thumbs-up-sign-and-symbol-in.jpg?b=1&s=170667a&w=0&k=20&c=7icNZOyUorcXZs4D5HTC6NakDlSCHetxOTb6F5tcslk="
        resultBox.textContent = "더 큰 숫자를 입력하세요"
    } else if(userValue > answer){
        resultImg.src = "https://media.istockphoto.com/id/1353205307/photo/female-hand-showing-the-thumb-down-gesture.jpg?b=1&s=170667a&w=0&k=20&c=LU5P6xbd5m2DJvhY3F4Of-iiH9ELcX1wcmY-nibZOC8="
        resultBox.textContent = "더 작은 숫자를 입력하세요"
    } else {
        resultImg.src = "https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313__340.jpg"
        resultBox.textContent = "정답입니다!"
        goButton.disabled = true;
    }

    history.push(userValue)
    console.log(history)

    if(chances < 1) {
        goButton.disabled = true;
        resultImg.src = "https://thumbs.dreamstime.com/b/game-over-bit-funky-colorful-screen-retro-style-red-yellow-91193840.jpg"
        resultBox.textContent = "기회를 모두 사용하셨습니다"
    }
}

function reset(){
    userNum.value = ""
    answerNum()
    resultImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/START_logo_2021.svg/1280px-START_logo_2021.svg.png"
    resultBox.textContent = "시작하세요!"
    chances = 5;
    chancesBox.textContent = `남은기회 : ${chances} 번`
    goButton.disabled = false;
}

answerNum()
reset()
