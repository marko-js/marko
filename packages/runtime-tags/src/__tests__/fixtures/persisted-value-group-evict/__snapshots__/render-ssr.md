# Render `{"price":111,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="tap"
>
  tap 0
</button>
<p
  class="price"
>
  111
</p>
```

# Update `{"price":111,"$global":{"persisted":true}}`

# Update `{"price":111,"$global":{"persisted":true}}`

# Update
```js
document.querySelector(sel).click();
```
```html
<button
  class="count"
>
  clicked 0
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: .toggle + button
REMOVE: .toggle + p
```

# Update
```js
assert.equal(document.querySelector("p.price"), null);
```

# Update update frame 1 of 2

# Update `{"price":222,"$global":{"persisted":true}}`

# Update
```js
assert.equal(document.querySelector("p.price"), null);
assert.ok(document.querySelector("button.toggle"));
assert.equal(
  document.querySelector("button.count").textContent,
  "clicked 0",
);
```
