const fullName = (firstName, lastName) => {
    const nome = {
        firstName,
        lastName
    }

    return nome
}

// console.log(fullName("marco", 'preti'))

module.exports = fullName('Marco', 'Preti')