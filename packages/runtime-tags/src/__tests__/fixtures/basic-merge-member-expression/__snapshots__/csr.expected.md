# Render
```html
<div />
<div />
<button>
  Click
</button>
```

# Mutations
```
INSERT div0, div1, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<div
  class="baz"
/>
<div
  class="baz"
/>
<button>
  Click
</button>
```

# Mutations
```
UPDATE div0[class] null => "baz"
UPDATE div1[class] null => "baz"
```