# Render `{"title":"Store","show":false}`
```html
<main>
  <h1>
    Store
  </h1>
</main>
```

# Update `{"title":"Store","show":true,"href":"/sale","label":"Sale","hidden":true}`
```html
<main>
  <h1>
    Store
  </h1>
  <a
    hidden=""
    href="/sale"
  >
    Sale
  </a>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
INSERT: main > h1 + a
UPDATE: main > a[href] null => "/sale"
UPDATE: main > a[hidden] null => ""
UPDATE: main > a::text " " => "Sale"
```

# Update `{"title":"Store","show":true,"href":"/new","label":"New"}`
```html
<main>
  <h1>
    Store
  </h1>
  <a
    href="/new"
  >
    New
  </a>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
UPDATE: main > a[href] "/sale" => "/new"
UPDATE: main > a[hidden] "" => null
UPDATE: main > a::text "Sale" => "New"
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
REMOVE: main > h1 + a
```

# Update `{"title":"Store","show":true,"href":"/back","label":"Back"}`
```html
<main>
  <h1>
    Store
  </h1>
  <a
    href="/back"
  >
    Back
  </a>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
INSERT: main > h1 + a
UPDATE: main > a[href] null => "/back"
UPDATE: main > a::text " " => "Back"
```
