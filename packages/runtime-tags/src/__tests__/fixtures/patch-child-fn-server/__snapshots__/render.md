# Render `{"suffix":"!"}`
```html
<main>
  <p>
    0!
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
```html
<main>
  <p>
    1!
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "0!" => "1!"
```

# Update `{"suffix":"?"}`
```html
<main>
  <p>
    1?
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "1!" => "1?"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    2?
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "1?" => "2?"
```
