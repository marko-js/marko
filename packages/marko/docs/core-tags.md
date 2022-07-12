# Core tags and attributes

Much like [HTML has its own native tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), Marko includes **core tags** and **global attributes** for declaratively building modern applications.

## `<if>`, `<else-if>`, `<else>`

Like the [equivalent JavaScript statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else), these tags render [conditional content](./conditionals-and-lists.md#conditionals):

```marko
<if(arriving)>
  Hey there
</if>
<else-if(leaving)>
  Bye now
</else-if>
<else>
  What’s up?
</else>
```

They support any JavaScript expression in their [tag arguments](./syntax.md#arguments):

```marko
<if(Math.random() > 0.5)>
  <p>50% chance to see this</p>
</if>
```

## `<for>`

The `<for>` tag iterates over [arrays/array-likes](#iterating-over-a-list), [object properties](#iterating-over-an-objects-properties), and [ranges of numbers](#iterating-between-a-range-of-numbers).

### Iterating over a list

Like the [JavaScript `for...of` loop statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), giving `<for>`’s `of` attribute a value will loop over that value as an array or iterable.

The current **item**, **index**, and the **iterating list** are provided as [tag parameters](./syntax.md#parameters):

```marko
$ const colors = ["red", "green", "blue"];
<ol>
  <for|color, index, colorList| of=colors>
    <li value=index>${color}</li>
  </for>
</ol>
```

The output HTML would be:

```html
<ol>
  <li value="0">red</li>
  <li value="1">green</li>
  <li value="2">blue</li>
</ol>
```

> **Pro Tip**: `<for>`’s `of` attribute can loop over any iterable, just like JavaScript’s [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of). This includes strings, `NodeList`s, `Set`s… any object with zero-indexed numeric properties and a `.length`, basically.

### Iterating over an object’s properties

Like [JavaScript’s `for...in` loop statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in), giving `<for>` an object as its `in` attribute will loop over that object’s properties.

The current **property name** and **property value** are provided as [tag parameters](./syntax.md#parameters):

```marko
$ const settings = {
  "Dark Mode": false,
  "Fullscreen": true
};

<dl>
  <for|name, enabled| in=settings>
    <dt>${name}:</dt>
    <dd>${enabled ? "on" : "off"}</dd>
  </for>
</dl>
```

The output HTML would be:

```html
<dl>
  <dt>Dark Mode:</dt>
  <dd>off</dd>
  <dt>Fullscreen:</dt>
  <dd>on</dd>
</dl>
```

### Iterating between a range of numbers

The final `<for>` variant loops between two numbers, by providing `from` and `to` attributes. The current number in the range will be provided as a [tag parameter](./syntax.md#parameters):

```marko
<ol type="I">
  <for|i| from=0 to=10>
    <li value=i>${i}</li>
  </for>
</ol>
```

You can also pass an optional `step` attribute, which defaults to 1 otherwise. `step` lets you increment by a specific amount:

```marko
<ol type="I">
  <for|i| from=0 to=10 step=2>
    <li value=i>${i}</li>
  </for>
</ol>
```

…becomes:

```marko
<ol type="I">
  <li value="0">0</li>
  <li value="2">2</li>
  <li value="4">4</li>
  <li value="6">6</li>
  <li value="8">8</li>
  <li value="10">10</li>
</ol>
```

> **ProTip:** This syntax is for generating numbers from nothing. Don’t use it to iterate over an object, like so:
>
> ```marko
> <!-- Inefficient code, do not copy -->
> <ul>
>   <for|i| from=0 to=(myArray.length - 1)>
>     <li>${myArray[i]}</li>
>   </for>
> </ul>
> ```
>
> Use [`<for of>`](#iterating-over-a-list) instead.

## `<while>`

> **Warning:** Using `<while>` is not recommended. Instead, replicate it with [an iterable and `<for>`](#iterating-over-a-list).
>
> In the future, Marko may restrict value mutation during rendering, for runtime optimizations.

You can repeat a chunk of markup _until a condition is met_ with the `while` tag:

```marko
$ let n = 0;

<while(n < 4)>
  <p>${n++}</p>
</while>
```

…becomes:

```html
<p>0</p>
<p>1</p>
<p>2</p>
<p>3</p>
```

## `<macro>`

Macros create reusable markup fragments for later use in the same template they were defined in.

The `<macro>` tag defines a macro as a tag via the `name` attribute. For example, the following macro is registered as the `<greeting>` tag:

```marko
<macro name="greeting">
  <p>Welcome!</p>
</macro>

<greeting/>
<greeting/>
```

…the output HTML would be:

```html
<p>Welcome!</p>
<p>Welcome!</p>
```

Macros become more useful with [tag parameters](./syntax.md#parameters), allowing complex templates. In this next example, `<greeting>` can now receive `firstName` and `count` parameters from its parent:

```marko
<macro|{ firstName, count }| name="greeting">
  <p>Hello ${firstName}!
    <output>You have ${count} new messages.</output>
  </p>
</macro>

<greeting firstName="Frank" count=20/>
```

…the output HTML would be:

```html
<p>
  Hello Frank!
  <output>You have 20 new messages.</output>
</p>
```

Macros receive input like components do, including [a `renderBody` for provided body content](./body-content.md):

```marko
<macro|{ renderBody }| name="special-heading">
  <h1>
    <${renderBody}/>!
  </h1>
</macro>

<special-heading>
  Hello
</special-heading>
```

…the output HTML would be:

```html
<h1>Hello!</h1>
```

> **ProTip:** You can use a macro inside itself for recursive layouts, like displaying directory contents.

## `<await>`

The `<await>` tag **renders markup asynchronously using a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**.

- Its `<@then>` [attribute tag](./syntax.md#attribute-tag) displays when the Promise _resolves_, optionally receiving the resolved value as a [tag parameter](./syntax.md#parameters).
- Its `<@catch>` attribute tag displays when the Promise _rejects_, optionally receiving the rejected value as a tag parameter.
- Its optional `<@placeholder>` attribute tag displays while the Promise is pending.

```marko
$ const personPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: 'Frank' }), 1000);
});

<await(personPromise) client-reorder=true>
  <@placeholder>
    <!-- Displays while promise is pending -->
    <label>Loading…
      <progress></progress>
    </label>
  </@placeholder>

  <@then|person|>
    <!-- Displays if promise resolves -->
    <p>Hello ${person.name}!</p>
  </@then>

  <@catch|err|>
    <!-- Displays if promise rejects -->
    ${err.name} error: ${err.message}
  </@catch>
</await>
```

Optional attributes for `<await>`:

|        Attribute | Type    | Description                                                                                                                                                                   |
| ---------------: | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|        `timeout` | integer | An optional timeout. If reached, rejects the promise with a `TimeoutError`.                                                                                                   |
|           `name` | string  | Improves debugging and ensures ordering with the `show-after` attribute.                                                                                                      |
|     `show-after` | string  | Another `<await>` tag’s `name`. Use with `client-reorder` to ensure that the current `<await>` will always render alongside or after the named `<await>`.                     |
| `client-reorder` | boolean | If true, anything after this `<await>` will be server-rendered before the Promise completes, then the fulfilled Promise’s result will be updated with client-side JavaScript. |

Regardless of these attributes, the promise is executed as eagerly as possible. The attributes control how to coordinate rendering with the rest of the page:

- `client-reorder` prevents `<await>` blocks from delaying the HTTP stream, at the expense of making their rendering rely on client-side JS. Useful for making non-critical page sections not block HTML streaming of important content.

- Using `show-after` with `client-reorder` ensures that the current `<await>` block will always render simultaneously with or after the named `<await>`. Useful for cutting down on [layout shift](https://web.dev/debug-layout-shifts/). `<@placeholder>`s can help fine-tune the user experience while loading.

- `timeout` is useful for limiting non-critical content from slowing down the rest of the page too much.

> **Pro Tip**: When using `timeout`, you can distinguish between `TimeoutError`s and promise rejections by checking the error’s `name`:
>
> ```marko
> <await(slowPromise) timeout=5000>
>   <@then>Done</@then>
>   <@catch|err|>
>     <if(err.name === "TimeoutError")>
>       Took too long to fetch the data!
>     </if>
>     <else>
>       Promise failed with ${err.message}.
>     </else>
>   </@catch>
> </await>
> ```

## `<include-text>`

`<include-text>` inlines text files into a template, escaping HTML syntax characters (`<`, `"`, etc.).

```marko
<include-text('./foo.txt')/>
```

If you do not want escaping, use [`<include-html>`](#include-html) instead.

## `<include-html>`

Like `<include-text>`, `<include-html>` inlines the contents of a file. However, this tag **does _not_ escape** special HTML characters.

```marko
<include-html('./foo.html')/>
```

## `<html-comment>`

Marko removes HTML comment tags from its output. But if you need comments in the output, that’s what `<html-comment>` is for:

```marko
<html-comment>[if IE]><script src="html-shiv.js"></script><![endif]</html-comment>
```

…becomes:

```html
<!--[if IE]><script src="html-shiv.js"></script><![endif]-->
```
