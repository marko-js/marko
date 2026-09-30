# Render `{"title":"a"}`
```html
<div>
  <h1>
    a
  </h1>
  <button>
    0
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <h1>
    a
  </h1>
  <button>
    1
  </button>
</div>
```
## Change
```
UPDATE: div > button::text "0" => "1"
```

# Update `{"title":"b"}`

## Patch rejected (navigate)
