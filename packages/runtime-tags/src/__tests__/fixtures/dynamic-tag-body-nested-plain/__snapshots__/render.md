# Render `{"on":true,"p":true,"note":"b"}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <section>
    <em>
      b
    </em>
  </section>
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
REMOVE: .toggle + section
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
  <section>
    <em>
      b
    </em>
  </section>
</main>
```
## Change
```
INSERT: .toggle + section
INSERT: main > section > em
UPDATE: main > section > em::text " " => "b"
```
