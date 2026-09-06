# Render `{"title":"Store","show":true}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    Value 1
  </p>
</main>
```

# Update `{"title":"Store!","show":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    Value 1
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > p::text@6 "1" => "1"
```

# Update `{"title":"Store!","show":false}`
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
REMOVE: main > h1 + p
```

# Update `{"title":"Store!","show":true}`
```html
<main>
  <h1>
    Store!
  </h1>
  <p>
    Value 1
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
INSERT: main > h1 + p
UPDATE: main > p::text@6 "" => "1"
```
