# Render `{"flag":true,"label":"a"}`
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

# Update `{"flag":false,"label":"b"}`
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

# Update `{"flag":true,"label":"c"}`

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

# Update `{"flag":true,"label":"d"}`
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
