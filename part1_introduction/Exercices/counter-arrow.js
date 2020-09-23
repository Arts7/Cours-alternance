// const CounterV1 = {
//     count: 0,
//     counter: function counter() {
//         setInterval(function () {
//         this.count++;
//         console.log(this.count);
//         }, 1000);
//     }
// };
const counterV2 = {
    count : 0,
    counter: function counter() {
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
}

counterV2.counter();