let alphabets = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

const getHash = (letter) => {
    letter = letter.toLowerCase()
    let index = alphabets.indexOf(letter)
    if (index === -1) {
        return letter
    }
    let hash = 25 - index
    return (alphabets[hash])
}


const Hasher = (word) => {
    let emptyWord = ""

    for (letter of word) {
        if (letter === '') {
            emptyWord += ' '
        } else {
            emptyWord += getHash(letter)
        }

    }
    console.log(emptyWord)
}

Hasher("I am done with my Assignments")