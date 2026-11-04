# Render `{"title":"a","note":"x"}`
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
      <button>
        +
      </button>
    </div>
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
    <div>
      <em>
        y
      </em>
      <button>
        +
      </button>
    </div>
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
    <div>
      <button>
        +
      </button>
    </div>
  </section>
</main>
```
## Change
```
REMOVE: main > section > div > em
```

# Update `{"title":"c","note":"z"}`
```html
<main>
  <section>
    <h2>
      c
    </h2>
    <div>
      <button>
        +
      </button>
    </div>
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
      <button>
        +
      </button>
    </div>
  </section>
</main>
```
## Change
```
INSERT: main > section > div > em
UPDATE: main > section > div > em::text " " => "z"
```

# Update `{"title":"d","note":"w"}`
```html
<main>
  <section>
    <h2>
      d
    </h2>
    <div>
      <em>
        w
      </em>
      <button>
        +
      </button>
    </div>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "c" => "d"
UPDATE: main > section > div > em::text "z" => "w"
```
