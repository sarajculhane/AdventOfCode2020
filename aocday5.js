const {data} = require('./day5data')

// problem 1

/*

test cases

BFFFBBFRRR: row 70, column 7, seat ID 567.
FFFBBBFRRR: row 14, column 7, seat ID 119.
BBFFBBFRLL: row 102, column 4, seat ID 820.

rows : 

For example, consider just the first seven characters of FBFBBFFRLR:

Start by considering the whole range, rows 0 through 127.
F means to take the lower half, keeping rows 0 through 63.
B means to take the upper half, keeping rows 32 through 63.
F means to take the lower half, keeping rows 32 through 47.
B means to take the upper half, keeping rows 40 through 47.
B keeps rows 44 through 47.
F keeps rows 44 through 45.
The final F keeps the lower of the two, row 44.

*/

const rowSearch = (id, numRows) => {
    const row = id.slice(0, id.length - 3)
    let high = numRows
    let low = 0
    let i = 0
    

    while(i < row.length) {
        if (row[i] === 'F') {
            numRows = numRows/2
            high-= numRows
        }   else if (row[i] === 'B') {
            numRows = numRows/2
            low+= numRows
        }
        i++
    }
    return Math.min(low, high)

}

/*

BFFFBBFRRR: row 70, column 7, seat ID 567.
FFFBBBFRRR: row 14, column 7, seat ID 119.
BBFFBBFRLL: row 102, column 4, seat ID 820.

*/
const columnSearch = (id, numColumns) => {
    const column = id.slice(id.length - 3, id.length)
    let high = numColumns
    let low = 0
    let i = 0

    while(i < column.length) {
        if (column[i] === 'L') {
            numColumns = numColumns/2
            high-= numColumns
        }   else if (column[i] === 'R') {
            numColumns = numColumns/2
            low+= numColumns
        }
        i++
    }
    return Math.min(low, high)
}

const getSeat = (ticket, numColumns, numRows) => rowSearch(ticket, numRows)*8 + columnSearch(ticket, numColumns)

// console.log(getSeat('FFFFBBBRLR', 8, 128))


const getMax = (data, numColumns, numRows) => Math.max(...data.map((ticket) => getSeat(ticket, numColumns, numRows)))

// problem 2


const getSeats = (data, numColumns, numRows) => data.map((ticket) => getSeat(ticket, numColumns, numRows))

const seats = getSeats(data, 8, 128).sort((a, b) => a-b)

const getMySeat = (seats) => {
    const min = Math.min(...seats)
    const max = Math.max(...seats)
    let j = 0
    for(let i = min ; i < max; i++) {
        console.log(i, seats[j])
        if(i !== seats[j]) return i
        
        j++
    }

}


