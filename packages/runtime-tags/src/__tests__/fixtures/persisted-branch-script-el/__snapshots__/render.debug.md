# Render `{"title":"Store","show":true,"label":"Sale"}`
```html
<main>
  <h1>
    Store
  </h1>
  <span
    data-seen="Sale"
  >
    Sale
  </span>
</main>
```

# Update `{"title":"Store","show":false}`
```html
<main>
  <h1>
    Store
  </h1>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
REMOVE: main > h1 + span
```

# Update `{"title":"Store","show":true,"label":"Back"}`
```html
<main>
  <h1>
    Store
  </h1>
  <span
    data-seen="Back"
  >
    Back
  </span>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
INSERT: main > h1 + span
UPDATE: main > span::text " " => "Back"
UPDATE: main > span[data-seen] null => "Back"
```
