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
  <span>
    has
  </span>
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
  <span>
    has
  </span>
</main>
```
## Change
```
UPDATE: main > section > em::text "a" => "b"
```

# Update `{"on":true,"note":"c"}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <section>
    <em>
      c
    </em>
  </section>
  <span>
    has
  </span>
</main>
```
## Change
```
UPDATE: main > section > em::text "b" => "c"
```
