class Rectangle {

    constructor(h, w) {
      this._h = h;
      this._w = w;
    }
  
    perimetre() {
        return (this._w + this._h) * 2;
    }

    area(){
        return this._w * this._h;
    }

    set w(w){
        this._w = w;
    }

    set h(h){
        this._h = h;
    }
}
  
class Square extends Rectangle {
    constructor(l) {
        super(l, l);
    }
}

let square = new Square(8, 9);
square.w = 7;

console.log(square.area());
console.log(square);


