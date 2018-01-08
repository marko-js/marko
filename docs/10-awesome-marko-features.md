<a href="#">
  <img src="https://cdn-images-1.medium.com/max/1000/1*Cmy6UutD5-ogL8dr1DySMQ.png" alt="Marko logo" width="100%" />
</a><br />

You can find the original ["10 Awesome Marko Features" article here](https://medium.com/@austinkelleher/10-awesome-marko-features-afba9d094d42)!

# 10 Awesome Marko Features

[Marko](http://markojs.com/) is a friendly and super fast UI library that makes
building web apps<br> fun! In celebration of rapidly approaching [5,000 stars on
GitHub](https://github.com/marko-js/marko) (the ultimate open source vanity
metric), here are 10 features that will make you more productive in no
particular order...

#### 1. Shorthand Attributes

Tired of constantly typing out `class` and `id` attributes? No need with Marko.
Simply utilize the shorthand based on CSS selectors:

```marko
style {
  .count {
    color:#09c;
  }
}

// Equivalent to <div class="count"/>
<div.count/>

// Equivalent to <span id="my-id"/>
<span#my-id/>

// Combined
<button#submit.primary/>
```

#### 2. All attribute values are Just JavaScript™

Unlike with HTML, you are not limited to string attribute values when using
Marko. Attributes can have types, which makes it really easy to pass data to
custom tags and it works for standard HTML tags too:

```marko
<div class=input.myClassName/>
<input type="checkbox" checked=input.isChecked/>
<awesome-component myString="Hello"/>
<awesome-component myNumber=1/>
<awesome-component myTemplateString=`Hello ${name}`/>
<awesome-component myBoolean=true/>
<awesome-component myArray=[1, 2, 3]/>
<awesome-component myObject={hello: 'world'}/>
<awesome-component myVariable=name/>
<awesome-component myFunctionCall=input.foo()/>
```

#### 3. Isomorphic UI components made easy

Tired of boilerplate code and trouble managing component input and state? Marko
makes it a breeze to develop self-contained and individually testable
components. Changing state is completely synchronous, so there won’t be any
headaches. You can also use inline styles making it very easy to develop small
components quickly.

```marko
class {
  onInput(input) {
    this.state = {
      count: input.count || 0
    };
  }
  increment() {
    this.state.count++;
  }
}

style {
  .count {
    color:#09c;
  }
}

<div.count>${state.count}</div>
<button on-click('increment')>
  Click me!
</button>
```

Do you see references to “Marko” in the snippet above? Yeah, me neither.

Is your component becoming too large? Do you prefer separating your CSS,
JavaScript, and markup code? No problem. You can easily [rip out your code into
multiple files](http://markojs.com/docs/components/#multi-file-components):

```
components/
  click-counter/
    component.js
    index.marko
    style.css
```

#### 4. Concise syntax

The DOM is just a tree structure. Indentation is a great way to describe a DOM
tree without having to worry about matching up beginning and ending tags. Marko
lets you choose between a concise, indentation-based syntax, and a familiar HTML
syntax:

```marko
<!-- Count our clicks! -->
<div.count>
  <p>Count: ${state.count}</p>
</div>
<button.example-button on-click('increment')>
  Click me!
</button>
```

Here’s the same thing with the concise syntax:

```marko
// Count our clicks!
div.count
  p -- Count: ${state.count}
button.example-button on-click('increment') — Click me!
```

Can’t make up your mind or just want to paste in that code snippet from
StackOverflow? HTML syntax can be used within in the concise syntax. You’ll come
back and make it consistent…*one day*.

#### 5. Import JavaScript modules

Do you have some helper JavaScript functions that you need to use in your views?
Marko let’s you import any JavaScript module into your template using the same
syntax as the JavaScript `import` statement without using Babel or any other
build tool. No need for problematic globals (you could do that too, but please
don’t or your coworkers will hate you).

```marko
import sum from './utils/sum';

<div>The sum of 2 + 3 is ${sum(2, 3)}</div>
```

#### 6. No need to import custom tags (it’s a good thing, trust me)

Marko uses your directory structure as a method for automatically registering
custom tags. This means that Marko can implicitly import tags based on where the
template is located on disk. Marko will search up the directory looking for
custom tags in `components/`directories similar to how Node.js discovers modules
in `node_modules/` directories.

Given the following directory structure:

```
components/
  fancy-button/
    index.marko
  fancy-container/
    index.marko
```

If `fancy-button` is used inside of `fancy-container`, it will be implicitly<br>
imported:

```marko
<!-- No need to use `require` or `import` because it will implicitly import custom tags -->
<div>
  <fancy-button color=input.buttonColor/>
</div>
```

#### 7. Use JavaScript to set CSS classes and styles

Setting CSS classes and styles is made easy using JavaScript! Marko will happily
accept simple strings, JavaScript objects and arrays (*falsy values will be
ignored).*

```marko
$ const fontColor = input.color || 'blue';
$ const isActive = input.active === true;

<div class=['person', isActive && 'active']
  style={color: fontColor} />
```

#### 8. Inline JavaScript Statements

Marko takes HTML and makes it more like JavaScript. You can exit out of HTML
mode to embed a JavaScript statement by starting the line with a `$`. You can
use this feature to embed JavaScript variables, functions, etc. where they are
needed (take that, “separation of concerns”).

```marko
$ const randomNumber = Math.random();
$ const person = {
  name: 'Frank',
  age: 32
};

<div>Random number: ${randomNumber}</div>
<div>${person.name} is ${person.age} years old</div>
```

If you want to combine multiple JavaScript statements you can do that too:

```marko
$ {
  const randomNumber = Math.random();
  const person = {
    name: 'Frank',
    age: 32
  };
}

<div>Random number: ${randomNumber}</div>
<div>${person.name} is ${person.age} years old</div>
```

#### 9. Async rendering with the `<await>` tag

Node.js is asynchronous. Browsers are asynchronous. Why should rendering be
synchronous? Pass your promise along to your template and Marko will
asynchronously render parts of your view. Turns out, [this is good for
performance](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/).

```marko
$ const searchResultsPromise = searchService.performSearch(keywords);

<await(person from searchResultsPromise)>
  <div>Hello ${person.name}!</div>
</await>
```

#### 10. Server side rendering is easy

Can’t decide if you want to do server-side rendering or client-side rendering?
Why are we even talking about this in 2017? It doesn’t matter. Seriously, just
do both. Marko makes this a no-brainer since you can render a Marko template
directly to a stream (oh, and Marko will [automatically mount UI
components](http://markojs.com/docs/server-side-rendering/) rendered on the
server when the page loads in the browser):

```js
require('marko/node-require').install(); // require .marko files!

const http = require('http');
const template = require('./template');

http.createServer().on('request', (req, res) => {
  template.render({
    name: 'Frank',
    count: 30,
    colors: ['red', 'green', 'blue']
  }, res);
}).listen(8080);
```

#### Bonus: Friendly compile-time errors

We all make mistakes *every now and then*. Typo in your custom tag? Forgot an
ending tag? No worries! Marko will give you a friendly error message and point
you right to the problematic code.

```marko
<!-- Ahhhh typo! This should be <fancy-button/> -->
<fancy-buttn/>
```

You may have missed it, but it was obvious to Marko:

```
Unrecognized tag: fancy-buttn — More details: https://github.com/marko-js/marko/wiki/Error:-Unrecognized-Tag at line 2 col 1
```

Coming soon: auto correction and autonomous coding

*****

*Cover image credit:
*[Wikipedia](https://en.wikipedia.org/wiki/List_of_rock_formations#/media/File:Amanhecer_no_Hercules_--.jpg)
