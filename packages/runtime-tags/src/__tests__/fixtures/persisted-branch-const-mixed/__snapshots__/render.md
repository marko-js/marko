# Render `{"show":true,"title":"Store"}`
```html
<main>
  <p>
    Store@0
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
    Store@1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store@0" => "Store@1"
```

# Update `{"show":true,"title":"Store?"}`
```html
<main>
  <p>
    Store?@1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store@1" => "Store?@1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    Store?@2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store?@1" => "Store?@2"
```

# Update `{"show":false,"title":"Store?"}`
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > p
```

# Update `{"show":true,"title":"Fresh"}`

## Patch rejected (navigate)
