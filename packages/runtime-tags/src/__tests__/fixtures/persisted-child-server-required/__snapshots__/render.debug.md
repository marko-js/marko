# Render `{"o":false}`
```html
<main>
  <button>
    t
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"o":true}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    open
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > em
```

# Update `{"o":false}`
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > em
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"o":true}`
