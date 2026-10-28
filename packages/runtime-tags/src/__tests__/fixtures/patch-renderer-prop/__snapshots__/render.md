# Render `{"title":"a"}`
```html
<main>
  <em>
    a
  </em>
  <button>
    +
  </button>
</main>
```

# Update `{"title":"b"}`
```html
<main>
  <em>
    b
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "a" => "b"
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
REMOVE: main > em
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    b
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "b"
```

# Update `{"title":"c"}`
```html
<main>
  <em>
    c
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "b" => "c"
```
