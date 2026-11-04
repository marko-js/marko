# Render `{"on":true,"note":"c"}`
```html
<main>
  <button
    id="toggle"
  >
    fail
  </button>
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
    fail
  </button>
  <i>
    boom
  </i>
  <em>
    c
  </em>
</main>
```
## Change
```
INSERT: #toggle + i
UPDATE: main > i::text " " => "boom"
INSERT: main > i + em
UPDATE: main > em::text " " => "c"
```
