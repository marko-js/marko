# TypeScript in Marko

> **Note:** Types are supported in Marko v5.22.7+ and Marko v4.24.6+

Marko’s TypeScript support offers in-editor error checking, makes refactoring less scary, verifies that data matches expectations, and even helps with API design.

Or maybe you just want more autocomplete in VSCode. That works too.

## Enabling TypeScript in your Marko project

There are two (non-exclusive) ways to add TypeScript to a Marko project:

- **For sites and web apps**, you can place [a `tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) at the project root:
  <pre>
  📁 components/
  📁 node_modules/
  <img src="./icons/marko.svg" width=16> index.marko
  📦 package.json
  <mark><img src="./icons/ts.svg" width=16> tsconfig.json</mark>
  </pre>
- **If you’re [publishing packages of Marko tags](https://markojs.com/docs/custom-tags/#publishing-tags-to-npm)**, add the following to [your `marko.json`](./marko-json.md):
  ```json
  "script-lang": "ts"
  ```
  This will automatically expose type-checking and autocomplete for the published tags.

> **ProTip**: You can also use the `script-lang` method for sites and apps.

## Typing a tag's `input`

A `.marko` file will use any exported `Input` type for [that file’s `input` object](./class-components.md#input).

This can be `export type Input` or `export interface Input`.

### Example

_PriceField.marko_

```marko
export interface Input {
  currency: string;
  amount: number;
}

<label>
  Price in ${input.currency}:
  <input type="number" value=input.amount min=0 step=0.01>
</label>
```

You can also import, reuse, and extend `Input` interfaces from other `.marko` or `.ts` files:

```marko
import { Input as PriceInput } from "<PriceField>";
import { ExtraTypes } from "lib/utils.ts";
export type Input = PriceInput & ExtraTypes;
```

```marko
import { Input as PriceInput } from "<PriceField>";
export interface Input extends PriceInput {
  discounted: boolean;
  expiresAt: Date;
};
```

### Generic `Input`s

[Generic Types and Type Parameters](https://www.typescriptlang.org/docs/handbook/2/generics.html) on `Input` are recognized throughout the entire `.marko` template (excluding [static statements](./syntax.md#static-javascript)).

For example, if you set up a component like this:

_components/my-select.marko_

```marko
export interface Input<T> {
  options: T[];
  onSelect: (newVal: T) => unknown;
}

static function staticFn() {
  // can NOT use `T` here
}

$ const instanceFn = (val: T) => {
  // can use `T` here
}

// can use `as T` here
<select on-input(evt => input.onSelect(options[evt.target.value] as T))>
  <for|value, i| of=input.options>
    <option value=i>${value}</option>
  </for>
</select>
```

…then your editor will figure out the types of inputs to that component:

```marko
<my-select options=[1,2,3] onSelect=val => {}/>
                                 // ^^^ number

<my-select options=["M","K","O"] onSelect=val => {}/>
                                       // ^^^ string
```

## Built-in Marko Types

Marko exposes [type definitions](https://github.com/marko-js/marko/blob/main/packages/marko/index.d.ts) you can reuse in [a TypeScript namespace](https://www.typescriptlang.org/docs/handbook/namespaces.html) called `Marko`:

- **`Marko.Template<Input, Return>`**
  - The type of a `.marko` file
  - `typeof import("./template.marko")`
- **`Marko.TemplateInput<Input>`**
  - The object accepted by the render methods of a template. It includes the template's `Input` as well as `$global` values.
- **`Marko.Body<Params, Return>`**
  - The type of the [body content](./body-content.md) of a tag (`renderBody`)
- **`Marko.Component<Input, State>`**
  - The base class for a [class component](./class-components.md)
- **`Marko.Renderable`**
  - Values accepted by the [`<${dynamic}/>` tag](./syntax.md#dynamic-tagname)
  - `string | Marko.Template | Marko.Body | { renderBody: Marko.Body}`
- **`Marko.Out`**
  - The render context with methods like `write`, `beginAsync`, etc.
  - `ReturnType<template.render>`
- **`Marko.Global`**
  - The type of the object in `$global` and `out.global` that can be passed to a template's render methods as the `$global` property.
- **`Marko.RenderResult`**
  - The [result](./rendering.md#renderresult) of rendering a Marko template
  - `ReturnType<template.renderSync>`
  - `Awaited<ReturnType<template.render>>`
- **`Marko.Emitter`**
  - `EventEmitter` from `@types/node`
- **`Marko.NativeTags`**
  - `Marko.NativeTags`: An object containing all native tags and their types
- **`Marko.Input<TagName>`** and **`Marko.Return<TagName>`**
  - Helpers to extract the input and return types native tags (when a string is passed) or a custom tag.
- **`Marko.BodyParameters<Body>`** and **`Marko.BodyReturnType<Body>`**
  - Helpers to extract the parameters and return types from the specified `Marko.Body`
- **`Marko.AttrTag<T>`** and **`Marko.RepeatableAttrTag<T>`**
  - Used to represent types for [attributes tags](./body-content.md#named-body-content)
  - `Marko.AttrTag<T>`: A single attribute tag
  - `Marko.RepeatableAttrTag<T>`: One or more attribute tags

### Typing `renderBody`

The most commonly used type from the `Marko` namespace is `Marko.Body` which can be used to type `input.renderBody`:

_child.marko_

```marko
export interface Input {
  renderBody?: Marko.Body;
}
```

Here, the following will be acceptable values:

_index.marko_

```marko
<child/>
<child>Text in render body</child>
<child>
  <div>Any combination of components</div>
</child>
```

Passing other values (including components) will cause a type error:

_index.marko_

```marko
import OtherTag from "<other-tag>";
<child renderBody=OtherTag/>
```

### Typing Tag Parameters

Tag parameters are passed to the `renderBody` by the child tag. For this reason, `Marko.Body` also allows typing of its parameters:

_for-by-two.marko_

```marko
export interface Input {
  to: number;
  renderBody: Marko.Body<[number]>
}

<for|i| from=0 to=input.to by=2>
  <${input.renderBody}(i)/>
</for>
```

_index.marko_

```marko
<for-by-two|i| to=10>
  <div>${i}</div>
</for-by-two>
```

### Extending native tag types within a Marko tag

The types for native tags are accessed via the global `Marko.Input` type. Here's an example of a component that extends the `button` html tag:

_color-button.marko_

```marko
export interface Input extends Marko.Input<"button"> {
  color: string;
  renderBody?: Marko.Body;
}

$ const { color, renderBody, ...restOfInput } = input;

<button style=`color: ${color}` ...restOfInput>
  <${renderBody}/>
</button>
```

### Registering a new native tag (eg for custom elements).

```ts
interface MyCustomElementAttributes {
  // ...
}

declare global {
  namespace Marko {
    namespace NativeTags {
      // By adding this entry, you can now use `my-custom-element` as a native html tag.
      "my-custom-element": MyCustomElementAttributes
    }
  }
}
```

### Registering new "global" HTML Attributes

```ts
declare global {
  namespace Marko {
    interface HTMLAttributes {
      "my-non-standard-attribute"?: string; // Adds this attribute as available on all HTML tags.
    }
  }
}
```

### Registering CSS Properties (eg for custom properties)

```ts
declare global {
  namespace Marko {
    namespace CSS {
      interface Properties {
        "--foo"?: string; // adds a support for a custom `--foo` css property.
      }
    }
  }
}
```

## TypeScript Syntax in `.marko`

Any [JavaScript expression in Marko](./syntax.md#inline-javascript) can also be written as a TypeScript expression.

### Tag Type Parameters

```marko
<child <T>|value: T|>
  ...
</child>
```

### Tag Type Arguments

_components/child.marko_

```marko
export interface Input<T> {
  value: T;
}
```

_index.marko_

```marko
// number would be inferred in this case, but we can be explicit
<child<number> value=1 />
```

### Method Shorthand Type Parameters

```marko
<child process<T>() { /* ... */ } />
```

### Attribute Type Assertions

The types of attribute values can _usually_ be inferred. When needed, you can assert values to be more specific with [TypeScript’s `as` keyword](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions):

```marko
<some-component
  number=1 as const
  names=[] as string[]
/>
```

# JSDoc Support

For existing projects that want to incrementally add type safety, adding full TypeScript support is a big leap. This is why Marko also includes full support for [incremental typing via JSDoc](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html).

## Setup

You can enable type checking in an existing `.marko` file by adding a `// @ts-check` comment at the top:

```js
// @ts-check
```

If you want to enable type checking for all Marko & JavaScript files in a JavaScript project, you can switch to using a [`jsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#using-tsconfigjson-or-jsconfigjson). You can skip checking some files by adding a `// @ts-nocheck` comment to files.

Once that has been enabled, you can start by typing the input with JSDoc. Here's an example component with typed `input`:

```marko
// @ts-check

/**
 * @typedef {{
 *   firstName: string,
 *   lastName: string,
 * }} Input
 */

<div>${firstName} ${lastName}</div>
```

## With a separate `component.js` file

Many components in existing projects adhere to the following structure:

<pre>
📁 components/
  📁 color-rotate-button/
    <img src="./icons/marko.svg" width=16> index.marko
    <img src="./icons/js.svg" width=16> component.js
</pre>

The `color-rotate-button` takes a list of colors and moves to the next one each time the button is clicked:

```marko
<color-rotate-button colors=["red", "blue", "yellow"]>
  Next Color
</color-rotate-button>
```

Here is an example of how this `color-rotate-button` component could be typed:

_components/color-rotate-button/component.js_

```js
// @ts-check

/**
 * @typedef {{
 *   colors: string[],
 *   renderBody: Marko.Renderable
 * }} Input
 * @typedef {{
 *   colorIndex: number
 * }} State
 * @extends {Marko.Component<Input, State>}
 */
export default class extends Marko.Component {
  onCreate() {
    this.state = {
      colorIndex: 0
    };
  }

  rotateColor() {
    this.state.colorIndex =
      (this.state.colorIndex + 1) % this.input.colors.length;
  }
}
```

_components/color-rotate-button/index.marko_

```marko
// @ts-check

/* Input will be automatically imported from `component.js`! */

<button
  onClick('rotateColor')
  style=`color: ${input.colors[state.colorIndex]}`>
  <${input.renderBody}/>
</button>
```

# CI Type Checking

For type checking Marko files outside of your editor there is the ["@marko/type-check" cli](https://github.com/marko-js/language-server/tree/main/packages/type-check).
Check out the CLI documentation for more information.
