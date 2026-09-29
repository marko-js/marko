# Render `{"props":{"title":"A"},"badge":{"label":"b1"}}`
```html
<main>
  <div
    class="card"
  >
    <h2>
      A
    </h2>
    <p>
      off
    </p>
    <button
      class="t"
    >
      show
    </button>
  </div>
  <button
    id="o"
  >
    o
  </button>
</main>
```

# Update
```js
document.querySelector("#o").click();
```
```html
<main>
  <b
    class="badge"
  >
    b1
  </b>
  <div
    class="card"
  >
    <h2>
      A
    </h2>
    <p>
      on
    </p>
    <button
      class="t"
    >
      show
    </button>
  </div>
  <button
    id="o"
  >
    o
  </button>
</main>
```
## Change
```
INSERT: main > .badge
UPDATE: .card > p::text "off" => "on"
UPDATE: .badge::text " " => "b1"
```

# Update `{"props":{"title":"B"},"badge":{"label":"b2"}}`
```html
<main>
  <b
    class="badge"
  >
    b2
  </b>
  <div
    class="card"
  >
    <h2>
      B
    </h2>
    <p>
      on
    </p>
    <button
      class="t"
    >
      show
    </button>
  </div>
  <button
    id="o"
  >
    o
  </button>
</main>
```
## Change
```
UPDATE: .card > h2::text "A" => "B"
UPDATE: .badge::text "b1" => "b2"
```

# Update
```js
document.querySelector("#o").click();
```
```html
<main>
  <div
    class="card"
  >
    <h2>
      B
    </h2>
    <p>
      off
    </p>
    <button
      class="t"
    >
      show
    </button>
  </div>
  <button
    id="o"
  >
    o
  </button>
</main>
```
## Change
```
REMOVE: main > b
UPDATE: .card > p::text "on" => "off"
```
