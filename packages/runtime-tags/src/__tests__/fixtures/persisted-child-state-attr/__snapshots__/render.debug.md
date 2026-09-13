# Render `{"title":"Store"}`
```html
<main>
  <h1>
    Store
  </h1>
  <section>
    <p>
      Value 0 (spun 0)
    </p>
    <button
      class="spin"
    >
      spin
    </button>
  </section>
  <button
    class="inc"
  >
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <section>
    <p>
      Value 1 (spun 0)
    </p>
    <button
      class="spin"
    >
      spin
    </button>
  </section>
  <button
    class="inc"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text@6 "0" => "1"
```

# Update
```js
document.querySelector("button.spin").click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <section>
    <p>
      Value 1 (spun 1)
    </p>
    <button
      class="spin"
    >
      spin
    </button>
  </section>
  <button
    class="inc"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text@14 "0" => "1"
```

# Update `{"title":"Store!"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <section>
    <p>
      Value 1 (spun 1)
    </p>
    <button
      class="spin"
    >
      spin
    </button>
  </section>
  <button
    class="inc"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<main>
  <h1>
    Store!
  </h1>
  <section>
    <p>
      Value 2 (spun 1)
    </p>
    <button
      class="spin"
    >
      spin
    </button>
  </section>
  <button
    class="inc"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text@6 "1" => "2"
```

# Update
```js
document.querySelector("button.spin").click();
```
```html
<main>
  <h1>
    Store!
  </h1>
  <section>
    <p>
      Value 2 (spun 2)
    </p>
    <button
      class="spin"
    >
      spin
    </button>
  </section>
  <button
    class="inc"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text@14 "1" => "2"
```
