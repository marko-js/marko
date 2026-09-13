# Render `{"title":"Store","show":true}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    a hit 0
  </p>
  <span>
    Seen 0
  </span>
  <button>
    +
  </button>
  <p>
    b hit 0
  </p>
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
    a hit 0
  </p>
  <p>
    b hit 0
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > p:nth-of-type(1)::text@0 "a" => "a"
REMOVE: main > p:nth-of-type(1) + span
REMOVE: main > p:nth-of-type(1) + button
UPDATE: main > p:nth-of-type(2)::text@0 "b" => "b"
REMOVE: main > p:nth-of-type(2) + span
REMOVE: main > p:nth-of-type(2) + button
```

# Update `{"title":"Store!","show":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    a hit 0
  </p>
  <span>
    Seen 0
  </span>
  <button>
    +
  </button>
  <p>
    b hit 0
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
UPDATE: main > p:nth-of-type(1)::text@0 "a" => "a"
INSERT: main > p:nth-of-type(1) + :is(span, button)
UPDATE: main > p:nth-of-type(2)::text@0 "b" => "b"
INSERT: main > p:nth-of-type(2) + :is(span, button)
UPDATE: main > span:nth-of-type(1)::text@5 "" => "0"
UPDATE: main > span:nth-of-type(2)::text@5 "" => "0"
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
    a hit 1
  </p>
  <span>
    Seen 0
  </span>
  <button>
    +
  </button>
  <p>
    b hit 0
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
UPDATE: main > p:nth-of-type(1)::text@6 "0" => "1"
```
