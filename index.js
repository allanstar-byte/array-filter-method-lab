// Code your solution here

drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(name) {
    for (const i of drivers) {
        if (i === name) {
            return i
        } else {
            return []
        }
    }
}
findMatching('y')