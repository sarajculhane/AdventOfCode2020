const fs = require('fs');
const filename = 'day13data.txt';
let [timestamp, ids ] = fs.readFileSync(filename).toString().split('\n')
ids = ids.split(',').filter(val => val !== 'x').map(val => Number(val))

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



console.log(soonestBus(timestamp, ids))