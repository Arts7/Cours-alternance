# Asynchrone en JS

## Introduction

Exécution du code de manière différée. Il permet également de gérer des actions qui "normalement" sont bloquantes. Chaque ligne est exécutée de manière synchrone, si une fonction prend du temps à s'exécuter le code synchrone attend la fin de son exécution.

**JavaScript est synchrone et mono-thread**. Il n'y a qu'un seul fil d'exécution du code source (stack), chaque ligne est exécuté de manière synchrone... Par contre les lignes asynchrones sont placées dans une file d'exécution (Task Queue). Toutes les fonctions asynchrones seront alors exécutées les unes à la suite des autres (par l'Event Loop), elles seront alors envoyées dans la stack d'exécution sans bloquer le reste de l'exécution (stack d'exécution synchrone). 

Ce mécanisme dans JS est géré par : l'Event Loop qui remet les fonctions de callback dans la stack d'exécution. Ce mécanisme constitue le coeur de JS.

Attention, ne condondez pas, il n'y a pas de parallèlisme dans l'exécution du code JS. Tout est géré dans un seul et unique thread d'exécution.

Par exemple, lorsque vous faites un appel réseau (API), vous pouvez fournir à une fonction asynchrone une fonction de callback qui sera exécutée dans la stack d'éxecution qu'une fois la réponse de l'API effectuée, sans bloquer le reste du code.

Remarques : il peut y avoir plusieurs Task Queue, par exemple le navigateur peut **prioriser** certaines actions asynchrones. Par défaut dans une Task Queue les callbacks sont en mode FIFO (first in first out ou premier entrée premier exécuté).

## Exemples de code asynchrone ...

```js
console.log('Start');

setTimeout(() => console.log('Hello world !'), 1000);

console.log('End');
```