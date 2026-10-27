# Render `{"title":"a","note":"x"}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <em>
      0:x
    </em>
  </section>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <em>
      1:x
    </em>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > em::text@0 "0" => "1"
```

# Update `{"title":"b","note":"y"}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <em>
      1:y
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
UPDATE: main > section > em::text@2 "x" => "y"
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
    <em>
      2:y
    </em>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > em::text@0 "1" => "2"
```

# Update `{"title":"c","note":"z"}`
```html
<main>
  <section>
    <h2>
      c
    </h2>
    <em>
      2:z
    </em>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > h2::text "b" => "c"
UPDATE: main > section > em::text@2 "y" => "z"
```
