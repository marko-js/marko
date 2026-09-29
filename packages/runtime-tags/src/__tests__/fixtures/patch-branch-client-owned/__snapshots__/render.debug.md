# Render `{"title":"a"}`
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

# Update `{"title":"b"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    b
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "b"
```

# Update `{"title":"c"}`
```html
<main>
  <p>
    c
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
