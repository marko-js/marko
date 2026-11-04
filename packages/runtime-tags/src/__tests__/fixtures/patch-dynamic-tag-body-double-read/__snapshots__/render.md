# Render `{"on":true,"note":"a"}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <section>
    <em>
      a
    </em>
  </section>
</main>
```

# Update `{"on":true,"note":"b"}`
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
UPDATE: main > section > em::text "a" => "b"
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
