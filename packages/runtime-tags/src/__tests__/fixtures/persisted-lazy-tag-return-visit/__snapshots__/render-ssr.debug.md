# Render `{"show":true,"label":"a"}`
```html
<main>
  <button>
    a:0
  </button>
</main>
```

# Update `{"show":false,"label":"a"}`
```html
<main />
```
## Change
```
REMOVE: main > button
```

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
UPDATE: main > button::text@0 "" => "b"
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

# Update `{"show":true,"label":"c"}`
```html
<main>
  <button>
    c:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@0 "b" => "c"
```
