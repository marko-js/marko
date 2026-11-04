# Render `{"on":true,"note":"b"}`
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
