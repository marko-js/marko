# Marko + Browserify

The [markoify](https://github.com/marko-js/markoify) transform for [browserify](https://github.com/substack/node-browserify) will automatically compile Marko templates that are required by other modules.

The [marko-browserify](https://github.com/marko-js-samples/marko-browserify) sample app is a great starting point if you would like to use Marko with Browserify.

## Installation

```bash
npm install markoify --save
```

## Usage

```bash
browserify -g markoify --extension=".marko" main.js -o bundle.js
```
