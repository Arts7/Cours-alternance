let numbers = [25,25,50];

function sumTTC(a,b,c,d = 20) {
    return a + b + c + (a + b + c) / 100 * d;
}

console.log(sumTTC(...numbers));