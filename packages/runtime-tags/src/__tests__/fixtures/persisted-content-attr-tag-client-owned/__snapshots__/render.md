# Render `{"note":"x"}`
```html
<main>
  <section>
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
    <button>
      +
    </button>
  </section>
</main>
```
## Change
```
REMOVE: main > section > em
```

# Update `{"note":"z"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
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
INSERT: main > section > em
UPDATE: main > section > em::text " " => "z"
```
