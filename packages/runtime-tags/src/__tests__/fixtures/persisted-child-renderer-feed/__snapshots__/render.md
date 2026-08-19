# Render `{"renderer":"div"}`
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
  <div />
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > div
```

# Update `{"renderer":"span"}`
```html
<main>
  <span />
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + div
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
REMOVE: main > span
```

# Update `{"renderer":"em"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em />
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > em
```
