# Render `{"show":false,"label":"a"}`
```html
<main />
```

# Update `{"show":true,"label":"a"}`

## Patch rejected (navigate)

# Update `{"show":true,"label":"b"}`
```html
<main>
  <button>
    b:0
  </button>
</main>
```
## Change
```
INSERT: main > button
UPDATE: main > button::text@2 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    b:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@2 "0" => "1"
```
