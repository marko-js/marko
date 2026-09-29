# Render `{"show":false,"start":5}`
```html
<main>
  <p>
    last 0
  </p>
</main>
```

# Update `{"show":true,"start":5}`
```html
<main>
  <p>
    last 0
  </p>
  <span>
    Seen 5
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p + :is(span, button)
UPDATE: main > span::text@5 "" => "5"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    last 6
  </p>
  <span>
    Seen 5
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@5 "0" => "6"
```

# Update `{"show":true,"start":7}`

# Update
```js
document.querySelector("button").click();
```
