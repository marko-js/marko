# Render `{"a":1}`
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
  <p
    data-all="{\"a\":1}"
  >
    x
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p[data-all] null => "{\"a\":1}"
```

# Update `{"a":2}`
```html
<main>
  <p
    data-all="{\"a\":2}"
  >
    x
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p[data-all] "{\"a\":1}" => "{\"a\":2}"
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

# Update `{"a":3}`
