# Render `{"title":"a","note":"x"}`
```html
<main>
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
    <div>
      <em>
        x
      </em>
    </div>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section
UPDATE: main > section > h2::text " " => "a"
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
  </section>
  <button>
    +
  </button>
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
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section
```

# Update `{"title":"c","note":"z"}`

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
INSERT: main > section > div > em
UPDATE: main > section > div > em::text " " => "z"
```
