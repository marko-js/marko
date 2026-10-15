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
</main>
```
## Change
```
INSERT: main > :is(em, button)
UPDATE: main > em::text " " => "0"
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
</main>
```
## Change
```
UPDATE: main > em::text "0" => "12"
```
