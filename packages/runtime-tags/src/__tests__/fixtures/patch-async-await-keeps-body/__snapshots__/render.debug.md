# Render `{"title":"Store","more":false,"promise":{},"morePromise":{}}`
```html
<main>
  <h1>
    Store
  </h1>
  <em>
    hi
  </em>
</main>
```

# Update `{"title":"Store!","more":true,"promise":{"value":"slow"},"morePromise":{"value":"extra"}}`
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    hi
  </em>
  <strong>
    more loading
  </strong>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
INSERT: main > em + strong
```

# Update
```js
;
```

# Update `{"title":"Store!","more":true,"promise":{"value":"slow"},"morePromise":{"value":"extra"}}`
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    slow
  </em>
  <strong>
    extra
  </strong>
</main>
```
## Change
```
UPDATE: main > em::text "hi" => "slow"
REMOVE: main > strong + strong
INSERT: main > em + strong
```
