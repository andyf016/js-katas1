function oneThroughTwenty() {
  const numbers = []  
  for (let counter = 1; counter <= 20; counter++) {
    numbers.push(counter)
}
return numbers;
}
console.log(oneThroughTwenty())
//call function oneThroughTwenty

function evensToTwenty() {

  const numbers = []
  for (let counter = 2; counter <=20; counter +=2){
    numbers.push(counter)
  }
  return numbers; 
}
console.log(evensToTwenty())                                   //call function evensToTwenty

function oddsToTwenty() {
    
  const numbers = []
  for (let counter = 1; counter <=20; counter +=2){
    numbers.push(counter)
  }
  return numbers; 
}
console.log(oddsToTwenty())                                   //call function oddsToTwenty

function multiplesOfFive() {
  
  const numbers = []
  for (let counter = 5; counter <=100; counter +=5){
    numbers.push(counter)
  }
    return numbers;
 

}
console.log(multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
    const numbers = []
    for (let counter = 1; counter <=10; counter += 1 ){
      let squa = counter * counter;
      numbers.push(squa)
    }
      return numbers;
  }
console.log(squareNumbers()) 
//call function squareNumbers

function countingBackwards() {
    const numbers = []
    for (let counter = 20; counter >=1; counter -=1){
    numbers.push(counter)
    }
    return numbers;
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
    const numbers = []
    for (let counter = 20; counter >=2; counter -=2){
      numbers.push(counter)
    }
    return numbers;
}
console.log(evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
    const numbers = []
    for(let counter = 19; counter >=1; counter -=2){
      numbers.push(counter)
    }
    return numbers;
}
console.log(oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    const numbers = []
    for(let counter = 100; counter >=5; counter -=5){
      numbers.push(counter)
    }
    return numbers;
}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    const numbers = []
    for(let counter = 10; counter >=1; counter -=1){
      let squa = counter * counter;
      numbers.push(squa)
    }
    return numbers;
   /* Your code goes below
  Write a for or a while loop
  console.log() the result */
}
console.log(squareNumbersBackwards())
//call function squareNumbersBackwards