# Render `{"keyField":"id"}`
```html
<main>
  <ul>
    <li>
      1
    </li>
    <li>
      2
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
      1
    </li>
    <li>
      2
    </li>
    <li>
      3
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
