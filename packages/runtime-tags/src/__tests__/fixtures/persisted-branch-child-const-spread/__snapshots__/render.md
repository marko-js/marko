# Render `{"show":false,"title":"a"}`
```html
<main />
```

# Update `{"show":true,"title":"b"}`
```html
<main>
  <div
    class="x"
    data-a="1"
    id="fixed"
  >
    b
  </div>
</main>
```
## Change
```
INSERT: main > #fixed
```

# Update `{"show":true,"title":"c"}`
```html
<main>
  <div
    class="x"
    data-a="1"
    id="fixed"
  >
    c
  </div>
</main>
```
## Change
```
UPDATE: #fixed::text "b" => "c"
```
