const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push('Ralph')
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    const copycat = [...cats, 'Broom']
return copycat
    
}

function prependCat(name) {
    const copycat = ['Arnold', ...cats]
    return copycat
}

function removeLastCat(){
    const copycat = cats.slice(0,-1)
    return copycat
}

function removeFirstCat(){
    const copycats = cats.slice(1)
    return copycats
}

