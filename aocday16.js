const fs = require('fs');
const filename = 'day16data.txt';
let data = fs.readFileSync(filename).toString().trim().split('\n')

data = data.filter((val) => val.length > 0).join('/').split('your ticket:').map((val) => val.split('/'))
let [conditions, tickets] = data
let [myTickets, nearbyTickets] = [tickets.slice(1, 2),tickets.slice(3)]


let nums = []

conditions.forEach((condition) => {
    nums.push(condition.split(':')[1])    
})

nums = nums.join(' ').split(' ').filter((val) => val != '' && val !=='or')
const getCols = (nums) => {
    let dat = {}
    let j = 1
    for(let i = 0; i < nums.length ; i++) {
        
            if(j === 1) {
                if(!dat[j]) dat[j] = [nums[i]]
                else dat[j].push(nums[i])
            }
            if(j === 2) {
                if(!dat[j]) dat[j] = [nums[i]]
                else dat[j].push(nums[i])
            }
            if(j === 3) {
                if(!dat[j]) dat[j] = [nums[i]]
                else dat[j].push(nums[i])
            } if(j === 4) {
                if(!dat[j]) dat[j] = [nums[i]]
                else dat[j].push(nums[i])  
            }

           j === 4 ? j = 1 : j++
           
    }
    return dat

}

const obj = getCols(nums)

// console.log(obj, nums)

const validator = (obj) => {
    let valid = []
    let min = [], max = []
    // const valsMins = obj[2]

    for(key in obj) {
       valid.push(obj[key].map((val) => val.split('-').map((num) => Number(num))))
    }

    valid.forEach((arr) => {
        let localMinOne = Infinity, localMinTwo = Infinity, localMaxOne = 0, localMaxTwo = 0
        for(let i = 0; i < arr.length; i++) {
            localMinOne = Math.min(localMinOne, arr[i][0])
            localMaxOne = Math.max(localMaxOne, arr[i][0])
            localMinTwo = Math.min(localMinTwo, arr[i][1])
            localMaxTwo = Math.max(localMaxTwo, arr[i][1])
        }
        min.push(localMinOne, localMinTwo)
        max.push(localMaxTwo, localMaxOne)
    } )

    
}

console.log(validator(obj))
console.log(obj)



/*

[ 26, 180, 25, 127 ]
[ 901, 971, 836, 971 ]

*/


