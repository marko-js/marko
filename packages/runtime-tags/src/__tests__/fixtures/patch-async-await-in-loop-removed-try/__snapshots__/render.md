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

# Update `{"promise":{"value":"b"}}`
```html
<button>
  drop
</button>
<i>
  loading
</i>
```
## Change
```
INSERT: button + i
REMOVE: i + div
REMOVE: i + div
```

# Update
```js
document.querySelector("button").click();
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
INSERT: button + div
REMOVE: div + i
```
