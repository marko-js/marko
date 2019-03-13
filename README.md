<p align="center">
    <a href="https://markojs.com/"><img src="https://raw.githubusercontent.com/marko-js/branding/master/marko-logo-medium-cropped.png" alt="Marko logo" width="300" /></a><br /><br />
</p>

Marko is a friendly (and fast!) UI library that makes building web apps fun.
Learn more on [markojs.com](https://markojs.com/), and even [Try Marko Online!](https://markojs.com/try-online/)

[![Build Status](https://travis-ci.org/marko-js/marko.svg?branch=master)](https://travis-ci.org/marko-js/marko)
[![Coverage Status](https://codecov.io/gh/marko-js/marko/branch/master/graph/badge.svg)](https://codecov.io/gh/marko-js/marko)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/marko-js/marko)
[![NPM](https://img.shields.io/npm/v/marko.svg)](https://www.npmjs.com/package/marko)
[![Downloads](https://img.shields.io/npm/dm/marko.svg)](http://npm-stat.com/charts.html?package=marko)

# Get Involved

- **Contributing**: Pull requests are welcome!
  - Read [`CONTRIBUTING.md`](.github/CONTRIBUTING.md) and check out our [bite-sized](https://github.com/marko-js/marko/issues?q=is%3Aissue+is%3Aopen+label%3Adifficulty%3Abite-sized) and [help-wanted](https://github.com/marko-js/marko/issues?q=is%3Aissue+is%3Aopen+label%3Astatus%3Ahelp-wanted) issues
  - Submit github issues for any feature enhancements, bugs or documentation problems
- **Support**: Join our [gitter chat](https://gitter.im/marko-js/marko) to ask questions to get support from the maintainers and other Marko developers
  - Questions/comments can also be posted as [github issues](https://github.com/marko-js/marko/issues)
- **Discuss**: Tweet using the `#MarkoJS` hashtag and follow [@MarkoDevTeam](https://twitter.com/MarkoDevTeam)

# Installation

```bash
npm install marko --save
```

# Examples

Marko provides an elegant and readable syntax for both single-file components
and components broken into separate files. There are plenty of examples to play
with on [Marko's Try-Online](https://markojs.com/try-online/). Additional
[component documentation](https://markojs.com/docs/class-components/) can be found on
the Marko.js website.

## Single file

The following single-file component renders a button and a counter with the
number of times the button has been clicked. [Try this example now!](https://markojs.com/try-online/?file=%2Fcomponents%2Fcomponents%2Fclick-count%2Findex.marko)

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

## Multi-file

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

Marko also supports a beautifully concise syntax as an alternative to HTML
syntax. Find out more about the [concise syntax here](https://markojs.com/docs/concise/).

```marko
<!-- Marko HTML syntax -->
<ul>
    <for|color| of=['a', 'b', 'c']>
        <li>${color}</li>
    </for>
</ul>
```

```marko
// Marko concise syntax
ul
    for|color| of=['a', 'b', 'c']
        li -- ${color}
```

# Changelog

See [CHANGELOG.md](CHANGELOG.md)

# Contributors

<a href="https://github.com/marko-js/marko/graphs/contributors">
    <img src="https://opencollective.com/marko-js/contributors.svg?width=890&button=false"/>
</a>

# Code of Conduct

This project adheres to the [eBay Code of Conduct](https://ebay.github.io/codeofconduct).
By participating in this project you agree to abide by its terms.

# License

MIT
