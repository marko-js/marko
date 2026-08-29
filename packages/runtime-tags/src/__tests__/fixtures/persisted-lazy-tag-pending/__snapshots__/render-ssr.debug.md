# Render `{"label":"a"}`
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

# Update `{"label":"b"}`

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
