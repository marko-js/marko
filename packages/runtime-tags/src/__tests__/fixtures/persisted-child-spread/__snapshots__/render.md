# Render `{"props":{"title":"A","note":"n1"},"show":false}`
```html
<main>
  <div
    class="card"
  >
    <h2>
      A
    </h2>
    <p>
      n1
    </p>
    <button
      class="t"
    >
      show
    </button>
  </div>
  <button
    id="c"
  >
    0
  </button>
</main>
```

# Update `{"props":{"title":"B"},"show":true,"more":{"note":"m1"}}`
```html
<main>
  <div
    class="card"
  >
    <h2>
      B
    </h2>
    <p />
    <button
      class="t"
    >
      show
    </button>
  </div>
  <div
    class="card"
  >
    <h2>
      fixed
    </h2>
    <p>
      m1
    </p>
    <button
      class="t"
    >
      show
    </button>
  </div>
  <button
    id="c"
  >
    0
  </button>
</main>
```
## Change
```
UPDATE: main > div:nth-of-type(1) > h2::text "A" => "B"
UPDATE: main > div:nth-of-type(1) > p::text "n1" => ""
INSERT: main > div:nth-of-type(1) + div
UPDATE: main > div:nth-of-type(2) > h2::text " " => "fixed"
UPDATE: main > div:nth-of-type(2) > p::text " " => "m1"
UPDATE: main > div:nth-of-type(2) > button::text " " => "show"
```

# Update `{"props":{"title":"B","note":"n2"},"show":true,"more":{"note":"m2"}}`
```html
<main>
  <div
    class="card"
  >
    <h2>
      B
    </h2>
    <p>
      n2
    </p>
    <button
      class="t"
    >
      show
    </button>
  </div>
  <div
    class="card"
  >
    <h2>
      fixed
    </h2>
    <p>
      m2
    </p>
    <button
      class="t"
    >
      show
    </button>
  </div>
  <button
    id="c"
  >
    0
  </button>
</main>
```
## Change
```
UPDATE: main > div:nth-of-type(1) > h2::text "B" => "B"
UPDATE: main > div:nth-of-type(1) > p::text "" => "n2"
UPDATE: main > div:nth-of-type(2) > h2::text "fixed" => "fixed"
UPDATE: main > div:nth-of-type(2) > p::text "m1" => "m2"
```
