# Body content

We're used to passing body content to HTML tags. When you do this, the tag has control over where and when this content is rendered. A good example of this is the [HTML `<details>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details):

```html
<details>
  <summary>Hello <strong>World</strong></summary>
  This is some <em>content</em> that can be toggled.
</details>
```

This is what it renders (try clicking it):

---

<details>
    <summary>Hello <strong>World</strong></summary>
    This is some <em>content</em> that can be toggled.
</details>

---

Custom tags can also receive content in the same way. This allows a component to give its user full control over _how_ some section of the content is rendered, but control _where_, _when_, and with _what_ data it is rendered. This feature is necessary to build composable components like overlays, layouts, dropdowns, etc. Imagine a `<table>` that didn't give you control over how its cells were rendered. That would be pretty limited!

## Rendering body content

When a custom tag is passed body content, it is received as a special `renderBody` property on the component's `input`. You can include this content anywhere in your component by using the [`<${dynamic}>` syntax](./syntax.md#dynamic-tagname).

_components/fancy-container.marko:_

```marko
<div class="container fancy">
    <${input.renderBody}/>
</div>
```

If we were to use this tag like this:

_Marko Source:_

```marko
<fancy-container>
    <p>Content goes here...</p>
</fancy-container>
```

The rendered output would be:

_HTML Output:_

```html
<div class="container fancy"><p>Content goes here...</p></div>
```

This is a pretty basic example, but you can imagine how this could be incorporated into a more advanced component to render passed content where/when needed.

> **ProTip:**
> Body content can be rendered multiple times. Or not at all.

## Passing attributes to body content

When rendering body content with `<${dynamic}>`, attributes may also be passed:

_components/random-value.marko:_

```marko
<!-- heh, it's not actually random -->
<${input.renderBody} number=1337 />
```

These attribute values can be received as a [tag parameter](./syntax.md#parameters):

```marko
<random-value|{ number }|>
    The number is ${number}
</random-value>
```

> **ProTip:**
> Some tags (like the above tag) may not render anything except their body content with some data. This can be quite useful, just look at the `<for>` and `<await>` tags!

## Named body content

You can also pass named content sections to a tag using [attribute tags](./syntax.md#attribute-tag) which are denoted by the `@` prefix.

```marko
<layout>
    <@heading>
        <h1>Hello Marko</h1>
    </@heading>
    <@content>
        <p>...</p>
    </@content>
</layout>
```

Like attributes, these attribute tags are received as `input.heading` and `input.content`, but they each have a `renderBody` property which we can now use:

_components/layout.marko_

```marko
<!doctype html>
<html>
    <body>
        <${input.heading.renderBody}/>
        <hr/>
        <${input.content.renderBody}/>
    </body>
</html>
```

> **ProTip:** The `renderBody` property can be omitted. You could use `<${input.heading}/>`, for example.

### Repeatable attribute tags

Attribute tags can be repeated. Rendering the same attribute tag name multiple times will cause the input value for that attribute to become an array instead of an single object.

This allows us to, for example, build a custom table component which allows its user to specify any number of columns, while still giving the user control over how each column is rendered.

_Marko Source:_

```marko
<fancy-table data=people>
    <@column|person|>
        Name: ${person.name}
    </@column>
    <@column|person|>
        Age: ${person.age}
    </@column>
</fancy-table>
```

> _Note_
> Attribute tags are _repeatable_.
>
> - Zero: if you don't pass any `@column` tags, the `fancy-table` receives `undefined`.
> - One: if you pass a single `@column` tag, the `fancy-table` receives a single attribute tag object. (For convenience this object is [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) meaning it can be directly passed to the `<for>` tag.)
> - Many: if you pass multiple `@column` tags, the `fancy-table` receives an array of attribute tags.
>   For TypeScript the [`Marko.AttrTag` or `Marko.RepeatableAttrTag` helpers](./typescript.md#built-in-marko-types) should be used here.

> _Protip_
> To `.map`, `.filter` or otherwise work with attribute tags as an array:
>
> ```marko
> $ const columns = [...input.column || []];
> ```

We can then use the `<for>` tag to render the body content into table, passing the row data to each column's body.

_components/fancy-table/index.marko:_

```marko {4-8}
<table class="fancy">
    <for|row| of=input.data>
        <tr>
            <for|column| of=input.column>
                <td>
                    <${column.renderBody} ...row/>
                </td>
            </for>
        </tr>
    </for>
</table>
```

We now have a working `<fancy-table>`. Let's see what it renders:

_Example Data:_

```js
[
  {
    name: "Patrick",
    age: 63
  },
  {
    name: "Austin",
    age: 12
  }
];
```

_HTML Output:_

```html
<table class="fancy">
  <tr>
    <td>Name: Patrick</td>
    <td>Age: 63</td>
  </tr>
  <tr>
    <td>Name: Austin</td>
    <td>Age: 12</td>
  </tr>
</table>
```

### Attributes on attribute tags

If you look at our previous example, we had to prefix each cell with the column label. It would be better if we could give a name to each column instead and only render that once.

_Marko Source:_

```marko
<fancy-table>
    <@column|person| heading="Name">
        ${person.name}
    </@column>
    <@column|person| heading="Age">
        ${person.age}
    </@column>
</fancy-table>
```

Now, each object in the `input.column` array will contain a `heading` property in addition to its `renderBody`. We can use another `<for>` and render the headings in `<th>` tags:

_components/fancy-table/index.marko:_

```marko {3-5}
<table class="fancy">
    <tr>
        <for|column| of=input.column>
            <th>${column.heading}</th>
        </for>
    </tr>
    <for|row| of=input.data>
        <tr>
            <for|column| of=input.column>
                <td>
                    <${column.renderBody} ...row/>
                </td>
            </for>
        </tr>
    </for>
</table>
```

We'll now get a row of headings when we render our `<fancy-table>`

_HTML Output:_

```html
<table class="fancy">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Patrick</td>
    <td>63</td>
  </tr>
  <tr>
    <td>Austin</td>
    <td>12</td>
  </tr>
</table>
```

> _Note_
> You may also specify that the attribute tag can be repeated in a [`marko-tag.json`](./marko-json.md#single-component-definition) file.
> This will cause an array to _always_ be passed if there are any items, rather than working up from `undefined`, single object and then an array.
>
> _components/fancy-table/marko-tag.json:_
>
> ```js
> {
>     "@data": "array",
>     "<column>": {
>         "is-repeated": true
>     }
> }
> ```

### Nested attribute tags

Continuing to build on our example, what if we want to add some custom content or even components into the column headings? In this case, we can extend our `<fancy-table>` to use nested attribute tags. We'll now have `<@heading>` and `<@cell>` tags nested under `<@column>`. This gives users of our tag full control over how to render both column headings and the cells within the column!

_Marko Source:_

```marko {3-8}
<fancy-table>
    <@column>
        <@heading>
            <app-icon type="profile"/> Name
        </@heading>
        <@cell|person|>
            ${person.name}
        </@cell>
    </@column>
    <@column>
        <@heading>
            <app-icon type="calendar"/> Age
        </@heading>
        <@cell|person|>
            ${person.age}
        </@cell>
    </@column>
</fancy-table>
```

Now instead of rendering the heading as text, we'll render the heading's body content.

_components/fancy-table/index.marko:_

```marko {5}
<table class="fancy">
    <tr>
        <for|column| of=input.column>
            <th>
                <${column.heading.renderBody}/>
            </th>
        </for>
    </tr>
    <for|row| of=input.data>
        <tr>
            <for|column| of=input.column>
                <td>
                    <${column.cell.renderBody} ...row/>
                </td>
            </for>
        </tr>
    </for>
</table>
```

Our headings can now include icons (and anything else)!

_HTML Output:_

```html
<table class="fancy">
  <tr>
    <th><img class="icon" src="profile.svg" /> Name</th>
    <th><img class="icon" src="calendar.svg" /> Age</th>
  </tr>
  <tr>
    <td>Patrick</td>
    <td>63</td>
  </tr>
  <tr>
    <td>Austin</td>
    <td>12</td>
  </tr>
</table>
```

### Dynamic attribute tags

The flexibility of the `<fancy-table>` is great if you want to render columns differently or have columns that display the data in a special way (such as displaying an age derived from a date of birth). However, if all columns are basically the same, the user might feel they're repeating themselves. As you might expect, you can use `<for>` (and `<if>`) to dynamically render attribute tags.

```marko
$ const columns = [{
    property: "name",
    title: "Name",
    icon: "profile"
}, {
    property: "age",
    title: "Age",
    icon: "calendar"
}]

<fancy-table>
    <for|{ property, title, icon }|>
        <@column>
            <@heading>
                <app-icon type=icon/> ${title}
            </@heading>
            <@cell|person|>
                ${person[property]}
            </@cell>
        </@column>
    </for>
</fancy-table>
```
