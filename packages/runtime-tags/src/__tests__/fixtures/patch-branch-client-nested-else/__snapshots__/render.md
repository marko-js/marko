# Render `{"on":true}`
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
    on
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

# Update `{"on":false}`
```html
<main>
  <span>
    off
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + p
```

# Update `{"on":true}`
```html
<main>
  <p>
    on
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
REMOVE: main > p + span
```
