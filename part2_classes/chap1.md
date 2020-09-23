# Introduction

Les classes ont été introduite avec ECMAScript2015.

## Définition

Les classes sont des fonctions spéciales.

### Déclaration mot reservé class

On utilise le mot clé class suivi du nom de la classe pour définir une classe, il faut alors créer un objet à partir de la classe en créant une instance de la classe. 

Vous pouvez également définir des **setter** et **getter**, il faudra cependant faire attention au nom des attributs de classe, une méthode classique consiste à préfixer les noms par un enderscore.

Les méthodes de classe sont des simple méthode nommée, voyez l'exemple de la méthode dim ci-dessous dans la classe Rectangle :

```js
class Rectangle{
    // constructeur
    constructor(w, h){
        this._w = w;
        this._h = h;
    }

    // getter
    get area(){
        return this._w * this._h;
    }

    // setter 
    set w(w){
        this._w = w;
    }

     set h(h){
        this._h = h;
    }

    // méthode de classe
    dim(){
        return `Width : ${this._w} Height : ${this._h}`;
    }
}

let r1 = new Rectangle(10, 2);
// 20
console.log(r1.area);

r1.w = 100;
r1.h = 30;

// 3000
console.log(r1.area);

console.log(r1.dim())
```

## Exercice Parser

Créez une classe Parser, elle permettra de parser une chaîne de caractères en fonction d’un motif. Voyez l’exemple de l’utilisation de cette classe ci-dessous avant d’implémenter le code :

```js
const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';

const p = new Parser(':');
p.parse(phrase);
console.log(p.str);
//8790 8987 7777 9007
```

### Héritage

Vous pouvez spécialiser une classe en héritant d'une classe parente plus générale. Rappelez-vous du principe de l'héritage en objet : une classe fille **est une sorte de** par rapport à la classe mère. Par exemple, un Lion est une sorte d'Animal. Dans ce cas la classe Lion est la classe fille de la classe Animal. C'est une spécialisation.

Pour définir une classe étendue vous devez utiliser le mot clé extends. 

Le mot clé **super** permet de faire passer des valeurs au constructeur de la classe mère. Attention, si vous êtes dans une classe dérivée (fille) et que vous définissez un constructeur de classe, vous êtes obligé de définir le mot clé super. Notez également que si vous définissez des attributs de classe, vous devez le faire après la méthode super, JS bloquera la compilation si ce principe de syntaxe n'est pas respectée.

```js
class Animal { 
    constructor(name) {
        this._name = name;
    }

    set name (name){
        this._name = name;
    }
  
    speak(){
        return `Name : ${this._name}`;
    }
}

class Lion extends Animal {
  constructor(name) {
    super(name); 
    // les this s'écriront après le mot clé super. JS vous
    // empêchera syntaxiquement de l'écrire avant super 
    this.force = 100;
  } 
}

let lion = new Lion("Shere")
lion.name = "Shere Khan";

console.log(lion.speak())
```

## Exercice Square Rectangle

Créez une classe Square et Rectangle. Laquelle des deux classes hérite de l'autre ? Répondez à la question avant de les implémenter ?

En utilisant l'héritage créez la classe Square avec un constructeur, cette class n'aura pas d'autre méthode. Implémentez dans la classe Rectangle les méthodes suivantes : area, dim. Créez les setter et getter permettant de mettre à jour les attributs de la classe.

## Attribut statique

Vous pouvez définir des attributs statiques dans une classe JS. Dans ce cas cet attribut dépendra de la classe et non de l'instance de classe.

```js
class Lion extends Animal { 

    static AGE_MIN = 1;

    constructor(name) {
        super(name);
    }

    get age() {
        return AGE_MIN;
    }

}

```

## Exercice Dragon & Knight

Créez deux classes Dragon et Knight et une classe Game. Dans un seul et même fichier un dragon et un chevalier s'affrontent en se portant des coups de manière aléatoire. La classe Game est composée de deux objets Dragon et Knight.

Lorsqu'un des deux adversaire n'a plus de vie la partie est terminée et le vainqueur est celui qui possède encore de la vie. 

Les classe Dragon et Knight auront :

**Attributs**

- force

- life

- shot 

- name

**Méthodes**

- hit()

La classe Game aura les attributs et méthode suivantes :

- players (new Map)

- run() <- méthode qui lancera le jeu