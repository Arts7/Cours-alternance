class Game {
    constructor(knight, dragon) {
        this._knight = knight;
        this._dragon = dragon;
    }

    run () {
        let life_dragon =  this._dragon.life;
        let life_knight =  this._knight.life;
        console.log(life_dragon, life_knight);
        while (life_knight > 0 && life_dragon  > 0) {
            let randomShoot = Math.round(Math.random() * 1);
            randomShoot == 0 ? life_dragon = life_dragon - this._knight.force * this._knight.multiShot : life_knight = life_knight - this._dragon.force * this._dragon.multiShot;
            randomShoot == 0 ? console.log(this._knight._name + ` inglige ` + this._knight.force * this._knight.multiShot) : console.log(this._dragon._name + ` inglige ` + this._knight.force * this._knight.multiShot);
            console.log('Vie restante de '+this._knight._name + ' : ' + life_knight + '\n' + 'Vie restante de '+this._dragon._name + ' : ' + life_dragon);
        }
        return life_dragon <= 0 ? `Pour le Norfendre ` + this._knight._name + ` a gagné !!` : 'Wall of fire ' + this._dragon._name + ` a gagné !!`;
    }
}

class Player {
    constructor(force, life, multiShot, name) {
        this._force     = force;
        this._life      = life;
        this._multiShot = multiShot;
        this._name      = name;
    }
    get force() {
        return randomNumber(this._force);
    }
    get life() {
        return randomNumber(this._life);
    }
    get multiShot() {
        return randomNumber(this._multiShot);
    }
    get name() {
        this._name;
    }
}

class Dragon extends Player {
    constructor (force, life, multiShot, name) {
        super(force, life, multiShot, name);
    }
}

class Knight extends Player {
    constructor (force, life, multiShot, name) {
        super(force, life, multiShot, name);
        
    }
}


function randomNumber (number) {
    return Math.round(Math.random() * number);
}
let Michel = new Knight(20,150,1,'Michel');
let Thierry = new Dragon(20,150,1,'Thierry');

let game = new Game(Michel, Thierry);
console.log(game.run());