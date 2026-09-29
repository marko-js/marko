# Render `{"show":false,"label":"a"}`
```html
<main />
```

# Update `{"show":true,"label":"b"}`

# Update `{"show":true,"label":"c"}`

# Update
```html
<main>
  <button>
    c:0
  </button>
</main>
```
## Change
```
INSERT: main > button
UPDATE: main > button::text@2 "" => "0"
```

# Update Release

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    c:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@2 "0" => "1"
```
