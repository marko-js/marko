# Render `{"title":"Store","items":["a"]}`
```html
<main>
  <p>
    Store a #0
  </p>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    Store a #1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store a #0" => "Store a #1"
```

# Update `{"title":"Store!","items":["a","b"]}`

## Patch rejected (navigate)
