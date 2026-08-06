# Render `{"title":"Store","show":true}`
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
  <span>
    Seen 0
  </span>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store
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

# Update `{"title":"Store!","show":false}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    Last 1
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
REMOVE: main > p + span
REMOVE: main > p + button
REMOVE: main > p + span
REMOVE: main > p + button
```

# Update `{"title":"Store!","show":true}`
```html
<main>
  <h1>
    Store!
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
INSERT: main > button:nth-of-type(1) + :is(span, button)
UPDATE: main > span:nth-of-type(1)::text@5 "" => "0"
UPDATE: main > span:nth-of-type(2)::text@5 "" => "0"
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    Last 2
  </p>
  <span>
    Seen 0
  </span>
  <button>
    +
  </button>
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
UPDATE: main > p::text@5 "1" => "2"
```
