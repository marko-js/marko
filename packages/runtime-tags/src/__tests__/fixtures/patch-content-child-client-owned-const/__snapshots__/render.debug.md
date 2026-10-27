# Render `{"note":"x"}`
```html
<main>
  <section>
    <h2 />
    <em>
      x
    </em>
    <button>
      +
    </button>
  </section>
</main>
```

# Update `{"note":"y"}`
```html
<main>
  <section>
    <h2 />
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
UPDATE: main > section > em::text "x" => "y"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <h2 />
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

# Update `{"note":"z"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <h2 />
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
