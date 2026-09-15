# Render
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
  <input
    value="x"
  />
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > input
UPDATE: main > input[value] null => "x"
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
REMOVE: main > input
```
