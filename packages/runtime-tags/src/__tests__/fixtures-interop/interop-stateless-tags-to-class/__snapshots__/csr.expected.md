# Render
```html
<!---->
<button>
  Say Hi
</button>
<span
  id="display"
/>
```

# Mutations
```
INSERT #comment, #text0, #text1, span
INSERT button
INSERT button/#text0
INSERT button/#text4
INSERT button/#text1
INSERT button/#text3
INSERT button/#text2
```

# Render ASYNC
```html
<!---->
<button>
  Say Hi
</button>
<span
  id="display"
>
  Hi!
</span>
```

# Mutations
```
INSERT span/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  Say Hi
</button>
<span
  id="display"
>
  Hi!
</span>
```
