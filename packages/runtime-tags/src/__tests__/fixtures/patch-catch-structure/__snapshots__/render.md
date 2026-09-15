# Render `{"promise":{},"detail":"a"}`
```html
<main>
  <span>
    ok
  </span>
  <button>
    0
  </button>
</main>
```

# Update `{"promise":{},"detail":"b"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <span>
    ok
  </span>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"promise":{},"detail":"c"}`
```html
<main>
  <p>
    c
  </p>
  <button>
    1
  </button>
</main>
```
## Change
```
REMOVE: main > p + span
INSERT: main > p
UPDATE: main > p::text " " => "c"
```
