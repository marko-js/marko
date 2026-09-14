# Render `{"title":"Store","show":true,"big":false}`
```html
<main>
  <h1>
    Store
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

# Update `{"title":"Store!","show":false,"big":false}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    Last 0
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
REMOVE: main > p + span
REMOVE: main > p + button
```

# Update `{"title":"Store!","show":true,"big":true}`
```html
<main>
  <h1>
    Store!
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
UPDATE: main > h1::text "Store!" => "Store!"
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
    Store!
  </h1>
  <p>
    Last 10
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
UPDATE: main > p::text@5 "0" => "10"
```
