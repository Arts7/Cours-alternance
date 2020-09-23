const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';

class Parser{
    constructor(string){
        this._s = string;
    }

    set string(string){
        this._s = string;
    }

    get string (){
        return this._s ;
    }

    parserString(){

        return this._s.split(':').filter(Number) ;
    }
}

const newString = new Parser(phrase);
const parseString = newString.parserString();
for (numb of parseString) {
    numb = numb.trim();
    return;
}
console.log(parseString);

console.log();
// console.log(rec.area() )