const phones  = [
    { name:'iphone XX', priceHT:900 },
    { name:'iphone X', priceHT:700 },
    { name:'iphone B', priceHT:200 }
];

const TTC = .2;

const phonesTTC = phones.map( phone => phone.priceHT * ( 1 + TTC ));

console.log(phonesTTC);