let {data} = require('./day4data')
const Regex = require("regex");

data = data.split('\n')
let passports = []
let temp = ''

for(let i = 0 ; i < data.length; i++) {
    if(data[i] !== '') temp += (data[i]+ ' ')
    else {
        passports.push(temp)
        temp = ''
    }
}

const validPassports = passports.map((passport) => passport.split(' ').map((item) => item.split(':')[0]))

// problem 1

const validatePassports = (passports) => {
    let count = 0
    for(let passport of passports) {
        passport = passport.slice(0, passport.length-1)
        if(passport.length === 8) count++
        else if(passport.length === 7 && !passport.includes('cid')) count++
    }
    return count
}





// problem 2


// get indexes of all valid passports determined in part 1

const validTwo = (passports) => {
    const valid = []
    for(let i = 0; i < passports.length; i++) {
        passport = passports[i].slice(0, passports[i].length-1)
        if(passport.length === 8) valid.push(i)
        else if(passport.length === 7 && !passport.includes('cid')) valid.push(i)
    }
    return valid
}



const valid = validTwo(validPassports)

let secondValid = passports.map((passport) => passport.split(' ').slice(0, passport.length-1).filter(val => val!=='' && !val.includes('cid')))
secondValid = secondValid.filter((val, i) => valid.includes(i))


const getPassportObj = (pass) => {
    const passArr = []

    pass.forEach((passport) => {
    const obj = {}
    for(let i = 0; i < passport.length; i++) {
        let field = passport[i].split(':')[0]
        let info = passport[i].split(':')[1]
        
        obj[field] = info
        
    }
    passArr.push(obj)

    })
    return passArr

}

const fullPassports = getPassportObj(secondValid)


/*

validate passports based on the following conditions

byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.

*/


const hairRegex =(str) => {
    const reg = /^[a-f0-9]$/i
    for(let char of str) {
        if(!reg.test(char)) return false
    }
    return true
}

const megaValidator = (passports) => {
    let count = 0
    const eyeColors = ['amb', 'blu', 'brn' ,'gry', 'grn', 'hzl',  'oth']
    for(let passport of passports) {
        let localCount = 0
        if(passport['byr'].length === 4 && Number(passport['byr']) >= 1920 && Number(passport['byr']) <= 2002 )  localCount++
        if(passport['iyr'].length === 4 && Number(passport['iyr']) >= 2010 && Number(passport['iyr']) <= 2020) localCount++
        if(passport['eyr'].length === 4 && Number(passport['eyr']) >= 2020 && Number(passport['eyr']) <= 2030) localCount++
        
        if(passport['hgt'].slice(passport['hgt'].length-2, passport['hgt'].length) === 'cm') {
            if(Number(passport['hgt'].slice(0, passport['hgt'].length -2))  >= 150 && Number(passport['hgt'].slice(0, passport['hgt'].length -2)) <= 193) localCount++
        }
        if(passport['hgt'].slice(passport['hgt'].length-2, passport['hgt'].length) === 'in') {
            if(Number(passport['hgt'].slice(0, passport['hgt'].length -2)) >= 59 && Number(passport['hgt'].slice(0, passport['hgt'].length -2)) <= 76) localCount++
            
        }
        
        
        if(passport['pid'].length === 9) {
            if(passport['pid'][0] === 0 && isNaN(Number(passport['pid'].slice(1))) === false) localCount++
            else if (isNaN(Number(passport['pid'])) === false) localCount++
        }
        if(eyeColors.includes(passport['ecl']) && passport['ecl'].length === 3) localCount++
        if(passport['hcl'][0] === '#' && passport['hcl'].slice(1).length === 6 && hairRegex(passport['hcl'].slice(1))) localCount++

        if(localCount === 7) count++

    }
    return count
    }

