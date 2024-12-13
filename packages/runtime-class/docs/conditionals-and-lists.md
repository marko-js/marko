# Conditionals and Lists

While HTML itself does not support conditionally displaying elements or repeating elements, it is a critical part of building any web application. In Marko, this functionality is provided by the `<if>` and `<for>` tags.

## Conditionals

The `<if>` tag receives an [argument](./syntax.md#arguments) which is used to determine if its body content should be present.

```marko
<if(user.loggedOut)>
    <a href="/login">Log in</a>
</if>
```

As you might expect, there are also `<else>` and `<else-if>` tags as well:

```marko
<if(user.loggedOut)>
    <a href="/login">Log in</a>
</if>
<else-if(!user.trappedForever)>
    <a href="/logout">Log out</a>
</else-if>
<else>
    Hey ${user.name}!
</else>
```

## Lists

If you have a list of data and need to represent it in the UI, the `<for>` tag is probably what you're looking for. The `<for>` tag passes each item and its index to its body as [parameters](./syntax.md#parameters).

```marko
<ul>
    <for|color, index| of=colors>
        <li>${index}: ${color}</li>
    </for>
</ul>
```

The `<for>` tag actually support 3 different flavors:

- [`<for|item, index, array| of=array>`](./core-tags.md#iterating-over-a-list) renders its body for each item of an array. It's similar to the JavaScript [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop.
- [`<for|key, value| in=object>`](./core-tags.md#iterating-over-an-objects-properties) renders its body for each property in an object. It's similar to the JavaScript [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop.
- [`<for|value| from=first to=last step=increment>`](./core-tags.md#iterating-between-a-range-of-numbers) renders its body for each value in between and including `from` and `to`.

### Always set a `key`

Marko automatically keeps your UI in sync with the state behind it, but one place where it needs a little extra help is repeated content. Specifying keys gives Marko a way to identify items in a list and keep track of which items have been changed, added, or removed.

A key should be a string or number that uniquely identifies an item in the list and differentiates it from its siblings. The same key value should never be used twice! Often, you will use something like an `id` property.

```marko
<for|user| of=users>
    <user-card key=user.id data=user/>
</for>
```

> **ProTip:** If you have multiple tags underneath `<for>`, you can key only the first tag and that is enough to properly identify its siblings as well
>
> ```marko
> <dl>
>     <for|entry| of=entries>
>         <!-- only the first tag needs a key -->
>         <dt key=entry.id>${entry.word}</dt>
>         <!-- This key can be omitted -->
>         <dd>${entry.definition}</dd>
>     </for>
> </dl>
> ```

> **Note:** If a key is not set, Marko will use the index of an item as its key. However this only works perfectly if items are only ever added or removed at the end of a list. Here's an example where things break down: if we have a list of `["A", "B", "C"]` and reverse the order, index keys would cause "A" to be transformed into "C" (and "C" into "A"), rather than just swapping them. Additionally if these components contained state, the new "C" would contain the state from the old "A" (and vice-versa). Be aware, stateful components include tags like the native `<input>` element. For this reason **it is always recommended to set a `key` on tags in a `<for>`.**
