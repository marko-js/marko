# Render `{"workspace":{"sessions":[{"id":"a"},{"id":"b"}]},"active":true}`
```html
<button>
  load
</button>
<div>
  a
</div>
<div>
  b
</div>
```

# Update `{"workspace":{"sessions":[{"id":"a"},{"id":"b"}]},"active":false}`
```html
<button>
  load
</button>
<div>
  a
</div>
```
## Change
```
REMOVE: div + div
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  load
</button>
<div>
  c
</div>
```
## Change
```
REMOVE: button + div
INSERT: button + div
```

# Update `{"workspace":{"sessions":[{"id":"d"}]},"active":true}`

# Update `{"workspace":null,"active":true}`
```html
<button>
  load
</button>
```
## Change
```
REMOVE: button + div
```
