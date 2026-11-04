# Render `{"inner":true,"title":"a"}`
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

# Update `{"inner":false,"title":"b"}`
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

# Update `{"inner":true,"title":"c"}`

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
INSERT: main > section
INSERT: main > section > em
UPDATE: main > section > em::text " " => "c"
```

# Update `{"inner":true,"title":"d"}`
```html
<main>
  <section>
    <em>
      d
    </em>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > section > em::text "c" => "d"
```
