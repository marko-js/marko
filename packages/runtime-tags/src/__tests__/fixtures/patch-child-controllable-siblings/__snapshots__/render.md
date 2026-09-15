# Render `{"title":"Store","show":true}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    First 0 Second 0
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

# Update `{"title":"Store!","show":false}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    First 0 Second 0
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
    First 0 Second 0
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
for (const button of document.querySelectorAll("button")) {
button.click();
}
```
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    First 1 Second 2
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
UPDATE: main > p::text@6 "0" => "1"
UPDATE: main > p::text@15 "0" => "2"
```
