const fs = require('fs');
const filename = 'day13data.txt';
let [timestamp, ids ] = fs.readFileSync(filename).toString().split('\n')
ids = ids.split(',').filter(val => val !== 'x')

numIds = ids.map(val => Number(val))

// part 1

const soonestBus = (timestamp, ids)  => {
    let min = Infinity
    let id  =0
    timestamp = Number(timestamp)
    let times = []
    ids.forEach((id) => {
        
    
        times.push(id * Math.round(timestamp / id))
    })
    
    times.forEach((time, i) => {

        if(time < min && time >= timestamp) {
            id = ids[i]
            min = time
        }

})
    return (min - timestamp) * id

}
/*
ex :

939
7,13,x,x,59,x,31,19
*/



console.log(soonestBus(timestamp, numIds))


// problem 2

const earliestOffset = (ids) => {
    let t = 0
    const mins = ids.map((val, i) => {
        if(val === 'x') return 0
        else return i+1
    })

    
    

}

const test = [17,'x',13,19]
// 3417

console.log(earliestOffset(test))