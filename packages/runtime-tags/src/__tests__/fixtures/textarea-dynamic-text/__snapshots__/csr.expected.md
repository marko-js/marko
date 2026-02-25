# Render
```html
<textarea>
  before
</textarea>
<button>
  update
</button>
```

# Mutations
```
INSERT textarea, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<textarea
  default-value="after"
>
  before
</textarea>
<button>
  update
</button>
```

# Mutations
```
REMOVE #text in textarea
INSERT textarea/#text
```