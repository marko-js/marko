# Render `{"title":"a","show":true}`
```html
<main>
  <h1>
    a
  </h1>
  <button>
    open
  </button>
</main>
```

# Update `{"title":"b","show":false}`
```html
<main>
  <h1>
    b
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "a" => "b"
REMOVE: main > h1 + button
```

# Update `{"title":"c","show":true}`
```html
<main>
  <h1>
    c
  </h1>
  <button>
    open
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "b" => "c"
INSERT: main > h1 + button
UPDATE: main > button::text " " => "open"
```
