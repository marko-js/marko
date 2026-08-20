# Render `{"show":true,"label":"a"}`
```html
<main>
  <button>
    a:0
  </button>
</main>
```

# Update
```js
setTimeout(() => document.body.click());
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
UPDATE: main > button::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":false,"label":"b"}`
```html
<main />
```
## Change
```
REMOVE: main > button
```
