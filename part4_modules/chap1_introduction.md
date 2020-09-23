# Modules

Les modules permettent de gérer les exports de fichiers.

La fonctionnalité d'export est présente par exemple dans Node.js.

## export

Vous pouvez dans un module exporter des constantes, fonctions, classes à la voler :

```js
export const API = 3;

export const info = () => "Info" ;
```

Vous également exporter à posteriori à l'aide de la syntaxe suivante :

```js
const API = 3;

const info = () => "Info" ;

export { API, info };
```

On peut également définir un export par défaut, dans ce cas un seul par module :

```js
export default const API = 3;
```

Vous pouvez également renommer vos exports :

```js
export { api as API };
```

Ou ré-exporter (délégation) à partir d'un autre module (fichier) :

```js
export * from './lib/modules';
```

Mais vous pouvez également cibler les export (délégation) :

```js
export {
    make as wrap,
    Component
} from 'toolkit';
```

## import 

D'un autre côté pour récupérer les modules dans les fichiers. 

- Vous pouvez importer tous les namesapces :

```js
import * as types from 'toolkit';
```

- Importer nommé et export par défaut se font également facilement :

```js
import React, {Component} from 'react';

// Import par défaut seul
import React from 'react';

// Import nommé seul

import { Component }  from 'react';
```

Bien sûr vous pouvez également renommer vos imports à la voler :

```js
import { Model as m }  from 'toolkit';

```