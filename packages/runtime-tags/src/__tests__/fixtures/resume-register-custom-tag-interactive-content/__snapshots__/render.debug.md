# Render
```html
<h1>
  <button
    id="inc"
  >
    0
  </button>
</h1>
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<h1>
  <button
    id="inc"
  >
    1
  </button>
  <em>
    odd
  </em>
</h1>
```
## Change
```
UPDATE: #inc::text "0" => "1"
INSERT: #inc + em
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<h1>
  <button
    id="inc"
  >
    2
  </button>
</h1>
```
## Change
```
UPDATE: #inc::text "1" => "2"
REMOVE: #inc + em
```
