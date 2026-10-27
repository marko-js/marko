# Render
```html
<main>
  <ul>
    <li>
      a
    </li>
  </ul>
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
      a
    </li>
    <li>
      b
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

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <ul>
    <li>
      a
    </li>
    <li>
      b
    </li>
    <li>
      b
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > ul > li:nth-of-type(2) + li
```
