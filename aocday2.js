// Advent Of Code Day 2 - Password Checker

// Data provided that the parsing was written for ommitted for brevity 


const arr = all.split(' ').join('').split('\n');
let arrInfo = []
arr.forEach((val) => {
  val = val.split(':')
  const obj = {}
  const elems = val[0].split('-')[1].split('')
  const max = elems.slice(0, elems.length-1).join('')
  const letter = elems[elems.length-1]
  const password = val[1]
  obj['min'] = val[0].split('-')[0]
  obj['max'] = max
  obj['letter'] = letter
  obj['password'] = password
  arrInfo.push(obj)
})

// Problem 1 


const checkValid = (arrInfo) => {
  let countValid = 0
  for(let i = 0; i < arrInfo.length; i++) {
    let count = 0
    
    for(let j = 0; j < arrInfo[i].password.length; j++) {
      if (arrInfo[i].letter === arrInfo[i].password[j]) count++
 
    }
    if(count >= arrInfo[i].min && count <= arrInfo[i].max) countValid++
  }
  return countValid
}

// Problem 2

const checkValidModified = (arrInfo) => {
    let countValid = 0
    for(let i = 0; i < arrInfo.length; i++) {
    let count = 0
    
    for(let j = 0; j < arrInfo[i].password.length; j++) {
      if (arrInfo[i].letter === arrInfo[i].password[j] && Number(arrInfo[i].min) === j+1) count++
      else if (arrInfo[i].letter === arrInfo[i].password[j] && Number(arrInfo[i].max) === j+1) count++

    }
    if(count === 1) countValid++
  }
  return countValid

}

console.log(checkValidModified(arrInfo))
