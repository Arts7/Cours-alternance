var numbers = [7, 9, 10, 1, 2, 3, 71, 8 ];

const num = numbers.map(function(numb, i) {
    return numb * (i % 2 === 0 ? 3 : 5);
});
// console.log(num);

const message = "Bonjour tout le monde, vive, JS !";
const valMessage = message
                        .replace(/,/g, '')
                        .split(' ')
                        .filter(w => !['.', ',', '!', '...']
                        .includes(w))
                        .map(w => w.length);

console.log(valMessage);