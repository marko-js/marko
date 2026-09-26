# Render `{"html":"<b>a</b>"}`
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
```html
<main>
  <b>
    a
  </b>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > b
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > b
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <b>
    a
  </b>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > b
```
