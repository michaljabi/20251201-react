// Jak najedziesz to będzie :number - bo to po prostu zwraca number.
function giveMeNumber() {
    return 2;
}


// jak najedziesz to będzie :Promise<number> - typ generyczny Promise, wymaga doprecyzowania - co dokładnie zwrwaca
async function giveMeNumber2() {
    return 2;
}

// async to tak naprawdę pod spodem to:
function giveMeNumberPromise(){
    return Promise.resolve(2);
}

// wniosek: asnyc/await to lukier składniowy dla Promise