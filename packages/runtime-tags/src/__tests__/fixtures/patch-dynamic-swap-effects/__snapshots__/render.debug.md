# Render `{"mode":"plain","label":"a"}`
```html
<main>
  <span>
    a
  </span>
</main>
```

# Update `{"mode":"live","label":"b"}`
```html
<main>
  <button>
    b 0
  </button>
</main>
```
## Change
```
INSERT: main > button
REMOVE: main > button + span
UPDATE: main > button::text@0 "" => "b"
UPDATE: main > button::text@2 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    b 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@2 "0" => "1"
```
