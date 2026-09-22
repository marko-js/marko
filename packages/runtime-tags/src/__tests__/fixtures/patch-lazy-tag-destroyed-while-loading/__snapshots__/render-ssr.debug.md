# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`

# Update `{"show":false,"label":"b"}`

# Update
```html
<main>
  <button>
    b:0
  </button>
</main>
```
## Change
```
INSERT: main
UPDATE: main > button::text@2 "" => "0"
```

# Update Release

# Update `{"show":true,"label":"c"}`
```html
<main>
  <button>
    c:0
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@0 "b" => "c"
```
