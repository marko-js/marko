# Body content

We're used to passing body content to HTML tags. When you do this, the tag has control over where and when this content is rendered. A good example of this is the [HTML `<details>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details):

```html
<details>
  <summary>Hello <strong>World</strong></summary> This is some
  <em>content</em> that can be toggled.
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

When a custom tag is passed body content, it is recieved as a special `renderBody` property on the component's `input`. You can include this content anywhere in your component by using the [`<${dynamic}>` syntax](./syntax.md#dynamic-tagname).

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

These attribute values can be recieved as a [tag parameter](./syntax.md#parameters):

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

Like attributes, these attribute tags are recieved as `input.heading` and `input.content`, but they each have a `renderBody` property which we can now use:

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

### Repeated attribute tags

Using the fancy table:

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

The fancy table implementation

```marko
<table class="fancy">
    <for|data| of=input.data>
        <tr>
            <for|column| of=input.column>
                <td>
                    <${column.renderBody} ...data/>
                </td>
            </for>
        </tr>
    </for>
</table>
```

People data:

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

The HTML Output when rendered with the above data:

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

```marko
<table class="fancy">
    <tr>
        <for|column| of=input.column>
            <th>${column.heading}</th>
        </for>
    </tr>
    <for|data| of=input.data>
        <tr>
            <for|column| of=input.column>
                <td>
                    <${column.renderBody} ...data/>
                </td>
            </for>
        </tr>
    </for>
</table>
```

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

### Nested attribute tags

```marko
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

```marko
<table class="fancy">
    <tr>
        <for|column| of=input.column>
            <th>
                <${column.heading.renderBody}/>
            </th>
        </for>
    </tr>
    <for|data| of=input.data>
        <tr>
            <for|column| of=input.column>
                <td>
                    <${column.cell.renderBody} ...data/>
                </td>
            </for>
        </tr>
    </for>
</table>
```

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
