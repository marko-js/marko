# Render
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
INSERT #text0, button, #text1
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
INSERT #text1
INSERT #text2
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
REMOVE #document-fragment/#text0 after button
REMOVE #document-fragment/#text1 after button
```