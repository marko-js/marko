# Render `{"min":1}`
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
    big
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

# Update `{"min":5}`
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

# Update
```js
document.querySelector("button").click();
```

# Update `{"min":2}`
```html
<main>
  <p>
    big
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
