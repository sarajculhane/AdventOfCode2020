// Advent of Code Day 3 - Dec 3, 2020

// parse data

const grid = str.split('\n').map((row) => row.split(''))


// problem one

const countTrees = (grid) => {
  let j = 0
  let count = 0
  for(let i = 0 ; i < grid.length; i++) {
    if(j > grid[i].length-1) j-=grid[i].length
    if(grid[i][j] === '#') count++
    j+=3
  }
  return count
}

// problem 2

const countTreesTwo = (grid, iSlope, jSlope) => {
  let j = 0
  let count = 0

  for(let i = 0 ; i < grid.length; i+=iSlope) {
    if(j > grid[i].length-1) j-=grid[i].length
    if(grid[i][j] === '#') count++
    j+=jSlope
  }
  return count
}
