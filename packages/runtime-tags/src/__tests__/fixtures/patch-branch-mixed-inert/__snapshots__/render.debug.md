# Render `{"min":0}`
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
    win
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

# Update `{"min":2}`
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

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    win
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
