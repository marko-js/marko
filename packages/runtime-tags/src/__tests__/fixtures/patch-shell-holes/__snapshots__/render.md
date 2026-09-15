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
INSERT: main > h1 + a
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
INSERT: main > h1 + a
```
