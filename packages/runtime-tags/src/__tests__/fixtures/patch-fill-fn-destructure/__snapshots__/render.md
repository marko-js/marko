# Render `{"title":"a"}`
```html
<main>
  <em>
    x:a
  </em>
  <button>
    t
  </button>
</main>
```

# Update `{"title":"b"}`
```html
<main>
  <em>
    x:b
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "x:a" => "x:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > em
```

# Update `{"title":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    x:c
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "x:c"
```
