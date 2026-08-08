# Render `{"show":true}`
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

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    promo
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
```

# Update `{"show":false}`
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

# Update `{"show":true}`
```html
<main>
  <p>
    promo
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
```
