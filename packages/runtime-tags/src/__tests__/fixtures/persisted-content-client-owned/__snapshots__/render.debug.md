# Render `{"open":true,"title":"a","note":"x"}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <em>
      x
    </em>
  </section>
  <button>
    +
  </button>
</main>
```

# Update `{"open":true,"title":"b","note":"y"}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <em>
      y
    </em>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > h2::text "a" => "b"
UPDATE: main > section > em::text "x" => "y"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section
```

# Update `{"open":true,"title":"c","note":"z"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <h2>
      c
    </h2>
    <em>
      z
    </em>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section
UPDATE: main > section > h2::text " " => "c"
INSERT: main > section > h2 + em
UPDATE: main > section > em::text " " => "z"
```

# Update `{"open":true,"title":"d","note":"w"}`
```html
<main>
  <section>
    <h2>
      d
    </h2>
    <em>
      w
    </em>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > h2::text "c" => "d"
UPDATE: main > section > em::text "z" => "w"
```
