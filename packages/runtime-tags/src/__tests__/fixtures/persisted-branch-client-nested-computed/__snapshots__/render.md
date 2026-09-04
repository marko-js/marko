# Render `{"key":"a","a":true}`
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

# Update `{"key":"a","a":false}`
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

# Update `{"key":"b","b":true}`
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

# Update
```js
document.querySelector("button").click();
```
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
