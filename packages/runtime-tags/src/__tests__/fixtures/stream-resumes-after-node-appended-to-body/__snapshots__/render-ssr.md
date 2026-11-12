# Render
```html
<main>
  <p>
    0
  </p>
</main>
```

# Update
```html
<main>
  <p>
    0
  </p>
  <button
    class="a"
  >
    a
  </button>
  <button
    class="lazy-a"
  >
    0
  </button>
</main>
```
## Change
```
INSERT: main > p + .a
INSERT: .a::text("a")
INSERT: .a + .lazy-a
INSERT: .lazy-a::text("0")
```

# Update
```js
document.body.appendChild(document.createElement("script"));
```

# Update
```html
<main>
  <p>
    0
  </p>
  <button
    class="a"
  >
    a
  </button>
  <button
    class="lazy-a"
  >
    0
  </button>
  <button
    class="b"
  >
    b
  </button>
  <button
    class="lazy-b"
  >
    0
  </button>
</main>
```
## Change
```
INSERT: .lazy-a + .b
INSERT: .b::text("b")
INSERT: .b + .lazy-b
INSERT: .lazy-b::text("0")
```

# Update
```js
document.querySelector(`.${name}`)?.click();
```
```html
<main>
  <p>
    1
  </p>
  <button
    class="a"
  >
    a
  </button>
  <button
    class="lazy-a"
  >
    0
  </button>
  <button
    class="b"
  >
    b
  </button>
  <button
    class="lazy-b"
  >
    0
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "0" => "1"
```

# Update
```js
document.querySelector(`.${name}`)?.click();
```
```html
<main>
  <p>
    1
  </p>
  <button
    class="a"
  >
    a
  </button>
  <button
    class="lazy-a"
  >
    0
  </button>
  <button
    class="b"
  >
    b
  </button>
  <button
    class="lazy-b"
  >
    1
  </button>
</main>
```
## Change
```
UPDATE: .lazy-b::text "0" => "1"
```
