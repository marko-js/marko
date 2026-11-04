# Render `{"on":false,"note":"a"}`
```html
<main>
  <em>
    a
  </em>
</main>
```

# Update `{"on":true,"note":"b"}`
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    b
  </em>
</main>
```
## Change
```
INSERT: main > .toggle
REMOVE: main > em + em
INSERT: .toggle + em
UPDATE: main > em::text " " => "b"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
REMOVE: .toggle + em
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    b
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text " " => "b"
```

# Update `{"on":true,"note":"c"}`
```html
<main>
  <button
    class="toggle"
  >
    t
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
