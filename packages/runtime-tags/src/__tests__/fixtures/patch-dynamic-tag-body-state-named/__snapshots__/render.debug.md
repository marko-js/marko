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
    toggle
  </button>
  <em>
    b
  </em>
</main>
```
## Change
```
INSERT: main > #toggle
REMOVE: main > em + div
INSERT: #toggle + em
UPDATE: main > em::text " " => "b"
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

# Update `{"on":true,"note":"c"}`
```html
<main>
  <button
    id="toggle"
  >
    toggle
  </button>
  <em>
    c
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "b" => "c"
```
