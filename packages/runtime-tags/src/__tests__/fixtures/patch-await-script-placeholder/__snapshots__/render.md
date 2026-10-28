# Render `{"promise":{"value":"a"}}`
```html
<main>
  loading
</main>
```

# Update
```html
<main
  data-seen="a"
>
  <span
    id="v"
  >
    a
  </span>
</main>
```
## Change
```
INSERT: #v::text("a")
REMOVE: main::text("loading")
INSERT: main > #v
UPDATE: main[data-seen] null => "a"
```

# Update `{"promise":{"value":"b"}}`
```html
<main
  data-seen="b"
>
  <span
    id="v"
  >
    b
  </span>
</main>
```
## Change
```
INSERT: main::text("loading")
REMOVE: ::text + #v
INSERT: main > #v
REMOVE: #v + ::text("loading")
UPDATE: main[data-seen] "a" => "b"
```
