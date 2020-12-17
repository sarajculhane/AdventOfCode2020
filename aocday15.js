const starting = {
    20 : [0, 0],
    9:[0, 0],
    11: [0, 0],
    0 :[0 ,0],
    1 : [0, 0],
    2: [0, 0]
}

let prev = 2

const num = 2020


const lastSpoken = (starting,cur, prev,  num) => {
    let i = 0
    while(!Object.keys(starting).includes(num)) {
        console.log(starting[cur])
        if(!starting[cur]) {
                prev = cur
                starting[cur] = [i]
                cur = 0                
            } 
        else if (starting[cur].length === 1) {
                console.log(starting[cur])
                starting[cur].unshift(i)
                cur = starting[prev][0] - starting[prev][1] || starting[prev]
                prev = cur
                
            } else {
                cur = starting[prev][0] - starting[prev][1]
                starting[cur].unshift(cur)
                starting[cur].pop()
                prev = cur
            }
            

            
            i++
    }

    return starting[num][0] - starting[num][1]
}
const test = {
    1 : [0],
    3 : [1],
}

let prevTest= 3
let curTest= 2

console.log(lastSpoken(test, curTest,prevTest, num))