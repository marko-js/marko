# Render `{"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
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

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`

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
