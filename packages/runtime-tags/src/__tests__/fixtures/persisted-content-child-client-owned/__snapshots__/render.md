# Render `{"title":"a","note":"x"}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <em>
      x
    </em>
    <button>
      +
    </button>
  </section>
</main>
```

# Update `{"title":"b","note":"y"}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <em>
      y
    </em>
    <button>
      +
    </button>
  </section>
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
  <section>
    <h2>
      b
    </h2>
    <button>
      +
    </button>
  </section>
</main>
```
## Change
```
REMOVE: main > section > h2 + em
```

# Update `{"title":"c","note":"z"}`
```html
<main>
  <section>
    <h2>
      c
    </h2>
    <button>
      +
    </button>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "b" => "c"
```

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
    <button>
      +
    </button>
  </section>
</main>
```
## Change
```
INSERT: main > section > h2 + em
UPDATE: main > section > em::text " " => "z"
```

# Update `{"title":"d","note":"w"}`
```html
<main>
  <section>
    <h2>
      d
    </h2>
    <em>
      w
    </em>
    <button>
      +
    </button>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "c" => "d"
UPDATE: main > section > em::text "z" => "w"
```
