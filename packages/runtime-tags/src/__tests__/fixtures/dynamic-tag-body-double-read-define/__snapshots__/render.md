# Render `{"on":true,"note":"b"}`
```html
<main>
  <button
    class="toggle"
  >
    t
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
    t
  </button>
  <section>
    <em>
      b
    </em>
  </section>
  <em>
    b
  </em>
</main>
```
## Change
```
INSERT: main > section + em
UPDATE: main > em::text " " => "b"
```
