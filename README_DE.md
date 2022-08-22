
### Verschluss

1. Definiere in deinen eigenen Worten den Begriff closure (1-2 Sätze).
2. Lies den folgenden Code und beantworte dann die folgenden Fragen.

```js
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

* a. Wo wird in diesem Code ein closure verwendet? Woran kannst du das erkennen?
* b. Vergleiche den ersten und zweiten Aufruf von `dansRoll`. Was ist immer gleich? Was könnte sich ändern?
* c. Was ist der lexikalische Bereich von `newRoll`?


3. Schreibe eine Funktion, mit der du dies mit Hilfe einer Closure tun kannst.

```js
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```
