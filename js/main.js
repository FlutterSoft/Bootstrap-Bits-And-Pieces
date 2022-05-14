// ||--------------------- Counter -------------------------------||

const txtCounter = document.querySelector("#counter")
let counter = 0
txtCounter.innerHTML = counter  // Sets on screen counter to 0

// subtracts 1 from counter and displays on screen
const btnLowerCounter = document.querySelector("#lowerCounter").addEventListener('click', function(){
    counter--
    txtCounter.innerHTML = counter
})
// adds 1 to counter and displays on screen
const btnRaiseCounter = document.querySelector("#raiseCounter").addEventListener('click', function(){
    counter++
    txtCounter.innerHTML = counter
})
// ||-------------------------------------------------------------||




// ||--------------------- Greeting -------------------------------||

const greetingSpan = document.querySelector("#greeting span")
const btnShowGreeting = document.querySelector("#showGreeting")
const inputUserName = document.querySelector("#inputUserName")

// takes name entered by user and adds it to the dom
btnShowGreeting.addEventListener('click', function(){
    let userName = inputUserName.value

    if (userName == ""){
        userName = "anonymous"
    }
    if (userName.toLowerCase() == "wall-e"){
        greetingSpan.innerText = "Wall-e, have a great day with EVE"
    }
    else {
        greetingSpan.innerText = userName + ", have a good day."

    }

})
// ||-------------------------------------------------------------||



// ||--------------------- Odd/Even -------------------------------||
const numSpan = document.querySelector("#oddEvenNumSpan")
let even
let randomNumber 
let oddEvenClicked = 0

const btnOdd = document.querySelector("#btnOdd")
const btnEven = document.querySelector("#btnEven")
const btnNewNumber = document.querySelector("#btnNewNumber")
const correctResultMsg = document.querySelector("#oddEvenCorrectResult")
const incorrectResultMsg = document.querySelector("#oddEvenIncorrectResult")

btnOdd.addEventListener('click', checkOddEven)
btnEven.addEventListener('click', checkOddEven)

btnNewNumber.addEventListener('click', newNumber)

newNumber()

function newNumber(){
    randomNumber = randomNum()
    numSpan.innerText = randomNumber
    incorrectResultMsg.classList.add('hidden')
    correctResultMsg.classList.add('hidden')
    oddEvenClicked = 0
}

function checkOddEven(){
    if(randomNumber%2 == 0){ // if number is even
        even = true
        if(this.innerText == 'Even'){
            // correct
            oddEvenCorrectResult('correct')
        }
        else {
            // incorrect
            oddEvenCorrectResult('incorrect')
        }
    } 
    else{ // if number is odd
        even = false
        if(this.innerText == 'Odd'){
            // correct
            oddEvenCorrectResult('correct')
        }
        else {
            //incorrect
            oddEvenCorrectResult('incorrect')
        }
    }
}

function oddEvenCorrectResult(result){
    if (oddEvenClicked < 1){ // checks to make sure only answered current answer once
        // shows result
        if(result == 'correct'){
            correctResultMsg.classList.remove('hidden')
        }
        else {
            incorrectResultMsg.classList.remove('hidden')
        }
    }

    oddEvenClicked++

}


function randomNum(){
    return Math.floor(Math.random()*100+1)
}



// ||-------------------------------------------------------------||
