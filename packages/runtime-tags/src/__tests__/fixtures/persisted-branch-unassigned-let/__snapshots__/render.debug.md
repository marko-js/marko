# Render `{"show":true}`
```html
<main>
  <p>
    Seen 1
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
    Seen 2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text@5 "" => "2"
```

# Update
```js
document.querySelector("button").click();
```
