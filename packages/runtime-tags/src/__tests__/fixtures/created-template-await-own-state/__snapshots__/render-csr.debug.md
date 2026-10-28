# Render `{"on":true,"note":"b"}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
</main>
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <button
    class="toggle"
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
INSERT: .toggle + em
UPDATE: main > em::text " " => "b"
```
