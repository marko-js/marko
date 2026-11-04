# Render `{"show":true,"on":true,"note":"c"}`
```html
<main>
  <div>
    c!
  </div>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c!
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
  <div>
    c!
  </div>
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

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <div>
    c!
  </div>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c!
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text " " => "c!"
```
