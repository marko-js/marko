# Render `{"on":false,"note":"a"}`
```html
<main>
  <div>
    <em>
      a
    </em>
  </div>
</main>
```

# Update `{"on":true,"note":"b"}`
```html
<main>
  <button
    id="toggle"
  >
    fail
  </button>
</main>
```
## Change
```
INSERT: main > #toggle
REMOVE: #toggle + div
```

# Update `{"on":true,"note":"c"}`

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
