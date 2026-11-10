# Render `{"html":"<b>a</b><i>b</i>"}`
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
  <i>
    b
  </i>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > :is(b, i)
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
REMOVE: main > i
```
