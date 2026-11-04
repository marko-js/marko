# Render `{"title":"Store"}`
```html
<main>
  <p>
    {"value":0,"label":"Store"}
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
    {"value":1,"label":"Store"}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":0,\"label\":\"Store\"}" => "{\"value\":1,\"label\":\"Store\"}"
```

# Update `{"title":"Store!"}`
```html
<main>
  <p>
    {"value":1,"label":"Store!"}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":1,\"label\":\"Store\"}" => "{\"value\":1,\"label\":\"Store!\"}"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    {"value":2,"label":"Store!"}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":1,\"label\":\"Store!\"}" => "{\"value\":2,\"label\":\"Store!\"}"
```
