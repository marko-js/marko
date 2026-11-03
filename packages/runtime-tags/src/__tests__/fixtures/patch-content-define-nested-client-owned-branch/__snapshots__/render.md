# Render `{"title":"a"}`
```html
<main>
  <section>
    <em>
      a
    </em>
  </section>
  <button>
    +
  </button>
</main>
```

# Update `{"title":"b"}`
```html
<main>
  <section>
    <em>
      b
    </em>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > em::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section />
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section > em
```

# Update `{"title":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <em>
      c
    </em>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section > em
UPDATE: main > section > em::text " " => "c"
```
