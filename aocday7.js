const fs = require('fs');
const filename = 'day7data.txt';
const bags = fs.readFileSync(filename)
    .toString().trim().split('\n')
    .map((bag) => bag.split('bags').map((bag)=> 
    bag.trim().split('bag').join(',').split(',').join(' ').trim().split('  ').filter((val) => val !== '')
    .slice(0, bag.length -2)))
    .map((bag) => bag.slice(0, bag.length -1))






const getBags = (bags, direct) => {
    const direct = bags.map((bag) => bag.join('')).filter((bag) => bag.includes('shiny gold')).map((bag) => bag.split('contain')[0]).filter((bag => bag !== 
        'shiny gold'))

    const indirect = bags.map((bag))
}

console.log(getIndirect(bags, direct))
/*

A bright white bag, which can hold your shiny gold bag directly.
A muted yellow bag, which can hold your shiny gold bag directly, plus some other bags.
A dark orange bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
A light red bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.

*/