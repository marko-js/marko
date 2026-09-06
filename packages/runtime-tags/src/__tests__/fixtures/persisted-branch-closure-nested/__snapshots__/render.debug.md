# Render `{"title":"Store","outer":true,"inner":true}`
```html
<main>
  <h1>
    Store
  </h1>
  <button>
    +
  </button>
  <p>
    Seen 0
  </p>
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
  <button>
    +
  </button>
  <p>
    Seen 1
  </p>
</main>
```
## Change
```
UPDATE: main > p::text@5 "0" => "1"
```

# Update `{"title":"Store!","outer":true,"inner":false}`
```html
<main>
  <h1>
    Store!
  </h1>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
REMOVE: main > button + p
```

# Update `{"title":"Store!","outer":true,"inner":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <button>
    +
  </button>
  <p>
    Seen 1
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
INSERT: main > button + p
UPDATE: main > p::text@5 "" => "1"
```

# Update `{"title":"Store!","outer":false,"inner":true}`
```html
<main>
  <h1>
    Store!
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
REMOVE: main > h1 + button
REMOVE: main > h1 + p
```

# Update `{"title":"Store!","outer":true,"inner":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <button>
    +
  </button>
  <p>
    Seen 0
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
INSERT: main > h1 + button
INSERT: main > button + p
UPDATE: main > p::text@5 "" => "0"
```
