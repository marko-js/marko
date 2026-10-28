# Render `{"attrs":{"title":"a"}}`
```html
<main>
  <div
    data-mounted=""
    title="a"
  >
    x
  </div>
</main>
```

# Update
```js
assert.ok(
document.querySelector("div").hasAttribute("data-mounted"),
"resume",
  );
```

# Update `{"attrs":{"title":"a"}}`

# Update
```js
assert.ok(
document.querySelector("div").hasAttribute("data-mounted"),
"kept",
  );
```
