# Render `{"label":"x"}`
```html
<main>
  <section>
    <p
      class="a"
    >
      x:0
    </p>
  </section>
  <section>
    <p
      class="b"
    >
      x:0
    </p>
  </section>
  <button
    class="a"
  >
    a
  </button>
  <button
    class="b"
  >
    b
  </button>
</main>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <section>
    <p
      class="a"
    >
      x:1
    </p>
  </section>
  <section>
    <p
      class="b"
    >
      x:0
    </p>
  </section>
  <button
    class="a"
  >
    a
  </button>
  <button
    class="b"
  >
    b
  </button>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > p::text "x:0" => "x:1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <section>
    <p
      class="a"
    >
      x:1
    </p>
  </section>
  <section>
    <p
      class="b"
    >
      x:1
    </p>
  </section>
  <button
    class="a"
  >
    a
  </button>
  <button
    class="b"
  >
    b
  </button>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(2) > p::text "x:0" => "x:1"
```

# Update `{"label":"y"}`
```html
<main>
  <section>
    <p
      class="a"
    >
      y:1
    </p>
  </section>
  <section>
    <p
      class="b"
    >
      y:1
    </p>
  </section>
  <button
    class="a"
  >
    a
  </button>
  <button
    class="b"
  >
    b
  </button>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > p::text "x:1" => "y:1"
UPDATE: main > section:nth-of-type(2) > p::text "x:1" => "y:1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <section>
    <p
      class="a"
    >
      y:2
    </p>
  </section>
  <section>
    <p
      class="b"
    >
      y:1
    </p>
  </section>
  <button
    class="a"
  >
    a
  </button>
  <button
    class="b"
  >
    b
  </button>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > p::text "y:1" => "y:2"
```
