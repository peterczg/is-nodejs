## is-nodejs

Check if your current js-runtime is node.js.

## Installation

```bash
yarn add is-nodejs
# or
npm install is-nodejs --save
```
## Usage

#### CommonJS
```js
const isNodejs = require('is-nodejs')
```

#### ES Module

```js
import isNodejs from 'is-nodejs'

```

## Implementation

```js

function isNodejs () {
    return typeof process !== 'undefined' && !!process.versions && !!process.versions.node
}

```