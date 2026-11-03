# Render `{"on":true,"note":"b"}`
```html
<main>
  <button
    id="toggle"
  >
    toggle
  </button>
  <em>
    b
  </em>
</main>
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<main>
  <button
    id="toggle"
  >
    toggle
  </button>
</main>
```
## Change
```
REMOVE: #toggle + em
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<main>
  <button
    id="toggle"
  >
    toggle
  </button>
  <em>
    b
  </em>
</main>
```
## Change
```
INSERT: #toggle + em
UPDATE: main > em::text " " => "b"
```
