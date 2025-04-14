const profile = () => {
    const {firstName, lastName} = require('./names.js')
    const hobbies = require('./hobbies.js')

    const person = {'fullName': `${firstName} ${lastName}`, hobbies}

    return person
}

console.log(profile())