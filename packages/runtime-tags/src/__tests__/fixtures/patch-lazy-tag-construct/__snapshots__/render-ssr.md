# Render `{"show":false,"label":"a"}`
```html
<main />
```

# Update `{"show":true,"label":"a"}`
```html
<main>
  <button>
    a:0
  </button>
</main>
```
## Change
```
INSERT: main > button
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    a:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@2 "0" => "1"
```
