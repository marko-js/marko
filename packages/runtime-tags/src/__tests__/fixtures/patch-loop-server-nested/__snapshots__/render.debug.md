# Render `{"list":["x"]}`
```html
<main>
  <li>
    ax
  </li>
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
  <li>
    ax
  </li>
  <li>
    bx
  </li>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > li:nth-of-type(1) + li
UPDATE: main > li:nth-of-type(2)::text@0 "" => "b"
```

# Update `{"list":["x","y"]}`
```html
<main>
  <li>
    ax
  </li>
  <li>
    ay
  </li>
  <li>
    bx
  </li>
  <li>
    by
  </li>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > li:nth-of-type(1) + li
INSERT: main > li:nth-of-type(3) + li
UPDATE: main > li:nth-of-type(2)::text@0 "" => "a"
UPDATE: main > li:nth-of-type(4)::text@0 "" => "b"
```

# Update `{"list":[]}`
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > li
REMOVE: main > li
REMOVE: main > li
REMOVE: main > li
```
