# Render `{"title":"Store","show":false,"promise":{}}`
```html
<main>
  <h1>
    Store
  </h1>
  <em>
    closed
  </em>
</main>
```

# Update `{"title":"Store!","show":true,"promise":{"value":"slow"}}`
```html
<main>
  <h1>
    Store!
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
REMOVE: main > h1 + em
```

# Update
```js
;
```

# Update `{"title":"Store!","show":true,"promise":{"value":"slow"}}`
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    slow
  </em>
</main>
```
## Change
```
INSERT: main > h1 + em
```

# Update `{"title":"Store!","show":false,"promise":{}}`
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    closed
  </em>
</main>
```
## Change
```
REMOVE: main > h1 + em
INSERT: main > h1 + em
```
