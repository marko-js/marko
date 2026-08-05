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
</main>
```

# Update `{"title":"Store!","show":true}`
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
UPDATE: main > h1::text "Store" => "Store!"
```

# Update `{"title":"Store!","show":false}`
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
UPDATE: main > h1::text "Store!" => "Store!"
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
    Last 0
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
```

## Patch rejected (navigate)
