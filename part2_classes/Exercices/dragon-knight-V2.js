class Game {
    constructor(knight, dragon) {
        this._knight = knight;
        this._dragon = dragon;
    }

    run () {
        while (this._dragon.life > 0 && this._knight.life  > 0) {
            let randomShoot = Math.round(Math.random() * 1);
            randomShoot == 0 ? this._dragon.life = this._dragon.life - this._knight.force * this._knight.multiShot : this._knight.life = this._knight.life - this._dragon.force * this._dragon.multiShot;
            randomShoot == 0 ? console.log(this._knight._name + ` inglige ` + this._knight.force * this._knight.multiShot) : console.log(this._dragon._name + ` inglige ` + this._knight.force * this._knight.multiShot);
            console.log('Vie restante de '+this._knight._name + ' : ' + this._knight.life + '\n' + 'Vie restante de '+this._dragon._name + ' : ' + this._dragon.life);

            time()
        }
        return this._dragon.life <= 0 ? `Pour le Norfendre ` + this._knight._name + ` a gagné !!` : 'Wall of fire ' + this._dragon._name + ` a gagné !!`;
    }
}

class Player {
    constructor(force, life, multiShot, name) {
        this._force     = force;
        this._life      = life;
        this._multiShot = multiShot;
        this._name      = name;
    }

    // Getters
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

    //Setter
    set life(life) {
        this._life = life;
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

function time() { 
    setTimeout(function() { 
        console.log('adzdazd');
    }, 5000); 
} 
function randomNumber (number) {
    return Math.round(Math.random() * number);
}

let Michel = new Knight(20,150,1,'Michel');
let Thierry = new Dragon(20,150,1,'Thierry');

let game = new Game(Michel, Thierry);
console.log(game.run());