# Huncwot + Marko

See the [marko-huncwot](https://github.com/zaiste/marko-huncwot) sample
project for a working example.

## Installation

    yarn add huncwot marko

## Usage

```javascript
require('marko/node-require');

const Huncwot = require('huncwot');

const app = new Huncwot();
const template = require('./index.marko');

app.get('/', request => template.stream({ name: 'Frank' }))

app.listen(3000);
```
