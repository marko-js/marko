# Render `{"text":"a"}`
```html
<main>
  <em>
    a
  </em>
  <button>
    t
  </button>
</main>
```

# Update `{"text":"b"}`
```html
<main>
  <em>
    b
  </em>
  <button>
    t
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
    t
  </button>
</main>
```
## Change
```
REMOVE: main > em
```

# Update `{"text":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    c
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "c"
```
