# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<main>
  <button>
    :
  </button>
</main>
```
## Change
```
INSERT: main
```

# Update `{"show":false,"label":"b"}`
## Change
```
REMOVE: main
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
INSERT: main
UPDATE: main > button::text@0 "" => "c"
UPDATE: main > button::text@2 "" => "0"
```
