// const theWord = 'Mississipi';

// const setCount = (word) => {
//     let setWord = new Set(word);
//     for (letter of setWord) {
//         let count = word.split('');
        
//     }
// }

// setCount(theWord);

const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
const stat = phrase.split(':').filter(Number);

console.log(stat);