# Render `{"title":"a","show":false}`
```html
<main>
  <h1>
    a
  </h1>
  <p>
    Last 0
  </p>
</main>
```

# Update `{"title":"b","show":true}`
```html
<main>
  <h1>
    b
  </h1>
  <p>
    Last 0
  </p>
  <span>
    Seen 0
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "a" => "b"
INSERT: main > p + :is(span, button)
UPDATE: main > span::text@5 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    b
  </h1>
  <p>
    Last 1
  </p>
  <span>
    Seen 0
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@5 "0" => "1"
```
