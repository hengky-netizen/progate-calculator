const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event)=> {
        console.log(event.target.value)
    })
})

const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = ''

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operator = document.querySelectorAll(".operator")

operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
    
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case "%":
            result = parseFloat(currentNumber) / 100 
        default:
            break    
    }
    currentNumber = result 
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
    console.log('AC button is pressed')
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = ''
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
    console.log(event.target.value)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }

    currentNumber += dot
}

const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
    console.log (event.target.value)
})

const inputPercentage = (percentage) => {
    currentNumber = parseFloat(currentNumber) / 100
}