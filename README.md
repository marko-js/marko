<p align="center">
    <a href="http://markojs.com/"><img src="https://raw.githubusercontent.com/marko-js/branding/master/marko-logo-medium-cropped.png" alt="Marko logo" width="300" /></a><br /><br />
</p>

Marko is a friendly (and fast!) UI library that makes building web apps fun.
Learn more on [markojs.com](http://markojs.com/), and even [Try Marko Online!](http://markojs.com/try-online/)

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
with on [Marko's Try-Online](http://markojs.com/try-online/). Additional
[component documentation](http://markojs.com/docs/components/) can be found on
the Marko.js website.

## Single file

The following single-file component renders a button and a counter with the
number of times the button has been clicked. [Try this example now!](http://markojs.com/try-online/?file=%2Fcomponents%2Fcomponents%2Fclick-count%2Findex.marko)

__click-count.marko__
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

__index.marko__
```marko
<div.count>
    ${state.count}
</div>
<button.example-button on-click('increment')>
    Click me!
</button>
```

__component.js__
```js
module.exports = {
    onCreate() {
        this.state = { count:0 };
    },
    increment() {
        this.state.count++;
    }
};
```

__style.css__
```css
.count {
    color:#09c;
    font-size:3em;
}
.example-button {
    font-size:1em;
    padding:0.5em;
}
```

## Concise Syntax

Marko also support a beautiful concise syntax as an alternative to the HTML
syntax. Find out more about the [concise syntax here](http://markojs.com/docs/concise/).

```marko
<!-- Marko HTML syntax -->
<ul>
    <li for(color in ['a', 'b', 'c'])>
        ${color}
    </li>
</ul>
```

```marko
// Marko concise syntax
ul
    li for(color in ['a', 'b', 'c'])
        -- ${color}
```

# Changelog

See [CHANGELOG.md](CHANGELOG.md)

# Maintainers

* [Patrick Steele-Idem](https://github.com/patrick-steele-idem) (Twitter: [@psteeleidem](http://twitter.com/psteeleidem))
* [Michael Rawlings](https://github.com/mlrawlings) (Twitter: [@mlrawlings](https://twitter.com/mlrawlings))
* [Phillip Gates-Idem](https://github.com/philidem/) (Twitter: [@philidem](https://twitter.com/philidem))
* [Austin Kelleher](https://github.com/austinkelleher) (Twitter: [@AustinKelleher](https://twitter.com/AustinKelleher))
* [Dylan Piercey](https://github.com/dylanpiercey) (Twitter: [@dylan_piercey](https://twitter.com/dylan_piercey))
* [Martin Aberer](https://github.com/tindli) (Twitter: [@metaCoffee](https://twitter.com/metaCoffee))

# Code of Conduct

This project adheres to the [eBay Code of Conduct](http://ebay.github.io/codeofconduct).
By participating in this project you agree to abide by its terms.

# License

MIT
