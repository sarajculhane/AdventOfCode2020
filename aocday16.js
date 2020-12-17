const fs = require('fs');
const filename = 'day16data.txt';
let data = fs.readFileSync(filename).toString().trim().split('\n')

data = data.filter((val) => val.length > 0).join('/').split('your ticket:').map((val) => val.split('/'))
let [conditions, tickets] = data
let [myTickets, nearbyTickets] = [tickets.slice(1, 2),tickets.slice(3)]


console.log(conditions)

let nums = []

conditions.forEach((condition) => {
    nums.push(condition.split(':')[1])    
})

nums = nums.join(' ').split(' ').filter((val) => val != '' && val !=='or')

console.log(nums, nums.length)

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


const validator = (obj) => {
    let invalid = []
    let valid = []

    
}

/*

*/


