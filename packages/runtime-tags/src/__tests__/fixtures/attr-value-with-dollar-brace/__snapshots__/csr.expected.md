# Render
```html
<button>
  0
</button>
<input
  placeholder="foo ${ bar"
  type="text"
/>
```

# Mutations
```
INSERT button, input
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<input
  placeholder="foo ${ bar"
  type="text"
/>
```

# Mutations
```
UPDATE button/#text "0" => "1"
```