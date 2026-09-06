# Render `{"key":"a","a":5}`
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

# Update `{"key":"a","a":11}`
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

# Update
```js
document.querySelector("button").click();
```
