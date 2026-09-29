# Render `{"title":"a","note":"x"}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <button>
      +
    </button>
  </section>
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
    <div>
      <em>
        x
      </em>
    </div>
    <button>
      +
    </button>
  </section>
</main>
```
## Change
```
INSERT: main > section > h2 + div
INSERT: main > section > div > em
UPDATE: main > section > div > em::text " " => "x"
```

# Update `{"title":"b","note":"y"}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <div>
      <em>
        y
      </em>
    </div>
    <button>
      +
    </button>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "a" => "b"
UPDATE: main > section > div > em::text "x" => "y"
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
REMOVE: main > section > h2 + div
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
    <div>
      <em>
        z
      </em>
    </div>
    <button>
      +
    </button>
  </section>
</main>
```
## Change
```
INSERT: main > section > h2 + div
INSERT: main > section > div > em
UPDATE: main > section > div > em::text " " => "z"
```
