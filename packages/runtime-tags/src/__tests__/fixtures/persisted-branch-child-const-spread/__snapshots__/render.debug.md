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
UPDATE: #fixed[class] null => "x"
UPDATE: #fixed[data-a] null => "1"
UPDATE: #fixed::text " " => "b"
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
