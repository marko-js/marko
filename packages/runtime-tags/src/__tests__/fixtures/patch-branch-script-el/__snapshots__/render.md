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
INSERT: main > h1 + span
UPDATE: main > span[data-seen] null => "Back"
```
