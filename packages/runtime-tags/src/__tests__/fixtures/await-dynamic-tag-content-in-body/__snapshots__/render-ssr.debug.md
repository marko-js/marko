# Render `{"on":true,"note":"a","p":{}}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    a
  </em>
</main>
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
</main>
```
## Change
```
REMOVE: main > em
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
    a
  </em>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "a"
```
