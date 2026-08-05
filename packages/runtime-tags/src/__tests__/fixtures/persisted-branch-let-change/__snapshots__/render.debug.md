# Render `{"title":"Store","show":true}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    Seen 0
  </p>
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
<main
  data-attempt="1"
>
  <h1>
    Store
  </h1>
  <p>
    Seen 0
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main[data-attempt] null => "1"
```

# Update `{"title":"Store!","show":true}`
```html
<main
  data-attempt="1"
>
  <h1>
    Store!
  </h1>
  <p>
    Seen 0
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update `{"title":"Store!","show":false}`
```html
<main
  data-attempt="1"
>
  <h1>
    Store!
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
REMOVE: main > h1 + p
REMOVE: main > h1 + button
```

# Update `{"title":"Store!","show":true}`
```html
<main
  data-attempt="1"
>
  <h1>
    Store!
  </h1>
  <p>
    Seen 0
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
INSERT: main > h1 + :is(p, button)
UPDATE: main > p::text@5 "" => "0"
```
## Console
```
ERROR {}
```
