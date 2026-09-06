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
<main>
  <h1>
    Store
  </h1>
  <p>
    Seen 1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@5 "0" => "1"
```

# Update `{"title":"Store!","show":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    Seen 1
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
UPDATE: main > h1::text "Store!" => "Store!"
REMOVE: main > h1 + p
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"title":"Store!","show":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    Seen 2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
INSERT: main > h1 + p
UPDATE: main > p::text@5 "" => "2"
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
    Seen 3
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@5 "2" => "3"
```
