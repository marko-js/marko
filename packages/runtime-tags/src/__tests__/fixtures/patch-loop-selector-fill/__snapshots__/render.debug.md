# Render `{"selected":1}`
```html
<main>
  <ul>
    <li>
      1
      <span>
        *
      </span>
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
      <span>
        *
      </span>
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

# Update `{"selected":3}`
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
      <span>
        *
      </span>
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > ul > li:nth-of-type(1)::text + span
INSERT: main > ul > li:nth-of-type(3)::text + span
```

# Update `{"selected":2}`
```html
<main>
  <ul>
    <li>
      1
    </li>
    <li>
      2
      <span>
        *
      </span>
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
INSERT: main > ul > li:nth-of-type(2)::text + span
REMOVE: main > ul > li:nth-of-type(3)::text + span
```
