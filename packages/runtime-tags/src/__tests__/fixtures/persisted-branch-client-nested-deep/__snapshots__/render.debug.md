# Render `{"a":true,"b":true}`
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
    both
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

# Update `{"a":true,"b":false}`
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

# Update `{"a":false,"b":true}`

# Update `{"a":true,"b":true}`
```html
<main>
  <p>
    both
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
