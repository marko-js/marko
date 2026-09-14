# Render
```html
<main>
  <ul />
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
  <ul>
    <li>
      x0
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > ul > li
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <ul>
    <li>
      x0
    </li>
    <li>
      x1
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > ul > li:nth-of-type(1) + li
```
