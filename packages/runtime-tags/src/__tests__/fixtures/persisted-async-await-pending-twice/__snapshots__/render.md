# Render `{"title":"Store","promise":{}}`
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

# Update `{"title":"Store!","promise":{}}`
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
UPDATE: main > h1::text "Store" => "Store!"
REMOVE: main > em
INSERT: main > h1 + em
```

# Update `{"title":"Store!!","promise":{}}`
```html
<main>
  <h1>
    Store!!
  </h1>
  <em>
    slower
  </em>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!!"
REMOVE: main > em
INSERT: main > h1 + em
```
