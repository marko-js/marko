# Render `{"show":false,"user":{"name":"SHOWN_ab","passwordHash":"SECRET_SHOWN_ab"}}`
```html
<main />
```

# Update `{"show":true,"user":{"name":"SHOWN_abcdef","passwordHash":"SECRET_SHOWN_abcdef"}}`
```html
<main>
  <em>
    0
  </em>
  <button>
    set
  </button>
  <button>
    reset
  </button>
</main>
```
## Change
```
INSERT: main > em
INSERT: main > em + button
INSERT: main > button:nth-of-type(1) + button
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    12
  </em>
  <button>
    set
  </button>
  <button>
    reset
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "0" => "12"
```
