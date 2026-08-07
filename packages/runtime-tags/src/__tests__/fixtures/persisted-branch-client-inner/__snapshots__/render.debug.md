# Render `{"show":true,"title":"a"}`
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

# Update `{"show":true,"title":"b"}`

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

# Update `{"show":true,"title":"c"}`
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

# Update `{"show":false,"title":"d"}`
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > p
```

# Update `{"show":true,"title":"e"}`

## Patch rejected (navigate)
