<h1 align="center">
    <a href="https://markojs.com/"><img src="https://raw.githubusercontent.com/marko-js/branding/master/marko-logo-medium-cropped.png" alt="Marko" width="250" /></a>
</h1>

<p align="center">
    <strong>A declarative, HTML-based language that makes building web apps fun 🔥</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/marko"><img alt="NPM" src="https://img.shields.io/npm/v/marko.svg"/></a>
  <a href="https://gitter.im/marko-js/marko"><img alt="Gitter" src="https://badges.gitter.im/Join%20Chat.svg"/></a>
  <a href="https://travis-ci.org/marko-js/marko"><img alt="Build Status" src="https://travis-ci.org/marko-js/marko.svg?branch=master"/></a>
  <a href="https://codecov.io/gh/marko-js/marko"><img alt="Coverage Status" src="https://codecov.io/gh/marko-js/marko/branch/master/graph/badge.svg"/></a>
  <a href="http://npm-stat.com/charts.html?package=marko"><img alt="Downloads" src="https://img.shields.io/npm/dm/marko.svg"/></a>
</p>

<p align="center">
    <a href="https://markojs.com/docs/">Docs</a> ∙ <a href="https://markojs.com/try-online/">Try Online</a> ∙ <a href="#contributors">Contribute</a> ∙ <a href="#community--support">Get Support</a>
</p>

# Intro

Marko is HTML _re-imagined_ as a language for building dynamic and reactive user interfaces.
Just about any valid HTML is valid Marko, but Marko extends the HTML language to allow
building modern applications in a declarative way.

Among these extensions are [conditionals](https://markojs.com/docs/conditionals-and-lists/#conditionals), [lists](https://markojs.com/docs/conditionals-and-lists/#lists), [state](https://markojs.com/docs/state/), and [components](https://markojs.com/docs/class-components/).
Marko supports both single-file components and components broken into separate files.

## Single file component

The following single-file component renders a button and a counter with the
number of times the button has been clicked.

**click-count.marko**

```marko
class {
    onCreate() {
        this.state = { count:0 };
    }
    increment() {
        this.state.count++;
    }
}

style {
    .count {
        color:#09c;
        font-size:3em;
    }
    .example-button {
        font-size:1em;
        padding:0.5em;
    }
}

<div.count>
    ${state.count}
</div>
<button.example-button on-click('increment')>
    Click me!
</button>
```

## Multi-file component

The same component as above split into an `index.marko` template file,
`component.js` containing your component logic, and `style.css` containing your
component style:

**index.marko**

```marko
<div.count>
    ${state.count}
</div>
<button.example-button on-click('increment')>
    Click me!
</button>
```

**component.js**

```js
module.exports = {
  onCreate() {
    this.state = { count: 0 };
  },
  increment() {
    this.state.count++;
  }
};
```

**style.css**

```css
.count {
  color: #09c;
  font-size: 3em;
}
.example-button {
  font-size: 1em;
  padding: 0.5em;
}
```

## Concise Syntax

Marko also supports a beautifully concise syntax as an alternative to its HTML
syntax. Find out more about the [concise syntax here](https://markojs.com/docs/concise/).

```marko
<!-- Marko HTML syntax -->
<ul class="example-list">
    <for|color| of=['a', 'b', 'c']>
        <li>${color}</li>
    </for>
</ul>
```

```marko
// Marko concise syntax
ul.example-list
    for|color| of=['a', 'b', 'c']
        li -- ${color}
```

# Getting Started

1. `npm install marko`
2. Read the [docs](https://markojs.com/docs/)

# Community & Support

| <a href="https://stackoverflow.com/questions/tagged/marko"><img src="https://user-images.githubusercontent.com/1958812/56055468-619b3e00-5d0e-11e9-92ae-200c212cafb8.png" height="50px"/></a> | <a href="https://gitter.im/marko-js/marko"><img src="https://user-images.githubusercontent.com/1958812/56055573-9c04db00-5d0e-11e9-9fd3-0395edf631a0.png" height="60px"/></a> | <a href="https://twitter.com/intent/tweet?hashtags=markojs"><img src="https://user-images.githubusercontent.com/1958812/56055707-07e74380-5d0f-11e9-8a59-d529fbb5a81e.png" height="40px"/></a> |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ask and answer StackOverflow questions with the [`marko` tag](https://stackoverflow.com/questions/tagged/marko)                                                                               | Come hang out in our Gitter chat room, ask questions, and discuss project direction                                                                                           | Tweet to [`@MarkoDevTeam`](https://twitter.com/MarkoDevTeam) or with the [`#markojs` hashtag](https://twitter.com/search?q=%23markojs&f=live)                                                  |

# Contributors

Marko would not be what it is without all those who have contributed ✨

<a href="https://github.com/marko-js/marko/graphs/contributors">
    <img src="https://opencollective.com/marko-js/contributors.svg?width=890&button=false"/>
</a>

## Get Involved!

- Pull requests are welcome!
- Read [`CONTRIBUTING.md`](.github/CONTRIBUTING.md) and check out our [bite-sized](https://github.com/marko-js/marko/issues?q=is%3Aissue+is%3Aopen+label%3Adifficulty%3Abite-sized) and [help-wanted](https://github.com/marko-js/marko/issues?q=is%3Aissue+is%3Aopen+label%3Astatus%3Ahelp-wanted) issues
- Submit github issues for any feature enhancements, bugs or documentation problems
- By participating in this project you agree to abide by its [Code of Conduct](https://ebay.github.io/codeofconduct).

# License

MIT
