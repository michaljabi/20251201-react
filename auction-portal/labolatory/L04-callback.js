// parameter c
function giveMeMoney( c ) { // PROVIDER
    console.log(c);
    // argument 300
    c(100)
    setTimeout(() => {
        c(200);
        c(300);
    }, 2000)
}


// Obierz tutaj to 300:

giveMeMoney((value) => { // CONSUMER
    console.log(value)
})




// Przykład "statyczny", z normalnym return
function giveMeNumber() {
    return 123;
}

console.log(giveMeNumber())


function sum(a, b) {
    return a + b;
}

sum(1, 2) //=
// sum('A', 'B') //=

/*
3 levele asynchronicznosci w JS:

1. callback - zawsze się udaje, co najwyżej może się nie wykonać
2. Promise (async/await) - 2 callbacki, jeden jak coś się uda, a jeden jak jest error

3. Observable  - nie jest natywne trzeba lib: np.  rxjs / można odbierać ciągle to są tzw. strumienie 3 callbacki (next,error,complete)


*/