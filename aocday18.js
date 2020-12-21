const fs = require('fs');
const filename = 'day18data.txt';
let data = fs.readFileSync(filename).toString().trim().split('\n')

const reverse = (data) => {
    const newArr = []
    
    for(let i = 0; i < data.length; i++) {
        let newStr = ''
        for(let j = data[i].length - 1; j >= 0 ; j--) {
            if(data[i][j] === ')') newStr += '('
            else if (data[i][j] === '(') newStr += ')'
            else newStr+= data[i][j]
        }
        newArr.push(newStr)
    }
    return newArr
}

console.log(reverse(data))