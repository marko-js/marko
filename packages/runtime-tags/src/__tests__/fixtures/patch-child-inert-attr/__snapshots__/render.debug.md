# Render
```html
<main>
  <p>
    {"value":0,"stamp":"stamp"}
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
    {"value":1,"stamp":"stamp"}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":0,\"stamp\":\"stamp\"}" => "{\"value\":1,\"stamp\":\"stamp\"}"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    {"value":2,"stamp":"stamp"}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":1,\"stamp\":\"stamp\"}" => "{\"value\":2,\"stamp\":\"stamp\"}"
```
