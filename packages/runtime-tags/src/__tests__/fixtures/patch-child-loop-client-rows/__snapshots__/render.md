# Render `{"promise":{}}`
```html
<button>
  drop
</button>
<div>
  <em>
    1:a
  </em>
</div>
<div>
  <em>
    2:a
  </em>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  drop
</button>
<div>
  <em>
    2:a
  </em>
</div>
```
## Change
```
REMOVE: button + div
```

# Update
```js
assert.equal(document.querySelectorAll("div").length, 1, label);
```

# Update `{"promise":{"value":"b"}}`
```html
<button>
  drop
</button>
<div>
  <em>
    2:b
  </em>
</div>
```
## Change
```
REMOVE: div > em
INSERT: div > em
```

# Update
```js
assert.equal(document.querySelectorAll("div").length, 1, label);
```
