# Render `{"on":true,"note":"a","p":{}}`
```html
<main />
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
INSERT: main > .toggle
INSERT: .toggle + em
UPDATE: main > em::text " " => "a"
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
REMOVE: .toggle + em
```
