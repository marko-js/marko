# Render `{"$global":{"brand":"acme"}}`
```html
<main>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"$global":{"brand":"bmce"}}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    bmce
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "bmce"
```
