# Render `{"show":false,"title":"A"}`
```html
<main />
```

# Update `{"show":true,"title":"A"}`
```html
<main>
  <section
    class="card"
  >
    <h2>
      A
    </h2>
    <button
      class="toggle"
    >
      toggle
    </button>
  </section>
</main>
```
## Change
```
INSERT: main > .card
UPDATE: .card > h2::text " " => "A"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <section
    class="card"
  >
    <h2>
      A
    </h2>
    <button
      class="toggle"
    >
      toggle
    </button>
    <b
      class="badge"
    >
      [A]
    </b>
  </section>
</main>
```
## Change
```
INSERT: .toggle + .badge
UPDATE: .badge::text@1 "" => "A"
```

# Update `{"show":true,"title":"B"}`
```html
<main>
  <section
    class="card"
  >
    <h2>
      B
    </h2>
    <button
      class="toggle"
    >
      toggle
    </button>
    <b
      class="badge"
    >
      [B]
    </b>
  </section>
</main>
```
## Change
```
UPDATE: .card > h2::text "A" => "B"
UPDATE: .badge::text@1 "A" => "B"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<main>
  <section
    class="card"
  >
    <h2>
      B
    </h2>
    <button
      class="toggle"
    >
      toggle
    </button>
  </section>
</main>
```
## Change
```
REMOVE: .toggle + b
```
