const fs = require('fs');
const filename = 'day6data.txt';
const groups = fs.readFileSync(filename).toString().trim().split('\n\n').map(group => group.split('\n'));

const strGroups = groups.map((group) => group.join(''))

// problem 1

const getYes = (groups) => {
    let sum = 0
    let count = 0
    groups.forEach((group) => {
        group = group.split('')
        const groupSet = new Set()
        group.forEach((char) => groupSet.add(char))
        sum+=groupSet.size
    })

    return sum
}

// problem 2

const getUnamimous = (groups) => {
   return groups.map((group) => {
        const hash = {}
        const len = group.length
        group = group.join('')
        for(let i = 0; i < group.length; i++) {
            if(!hash[group[i]]) hash[group[i]] =1
            else hash[group[i]]++
        }
        return Object.values(hash).filter((count) => count === len)
    }).map((group) => group.length).reduce((cur, acc) => cur + acc)

}

console.log(getUnamimous(groups))
