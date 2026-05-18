# Render
```html
<div>
  <button
    id="button"
  >
    0
  </button>
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <button
    id="button"
  >
    1
  </button>
</div>
```
## Change
```
REMOVE: #button::text("0")
INSERT: #button::text("1")
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <button
    id="button"
  >
    2
  </button>
</div>
```
## Change
```
REMOVE: #button::text("1")
INSERT: #button::text("2")
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <button
    id="button"
  >
    3
  </button>
</div>
```
## Change
```
REMOVE: #button::text("2")
INSERT: #button::text("3")
```
