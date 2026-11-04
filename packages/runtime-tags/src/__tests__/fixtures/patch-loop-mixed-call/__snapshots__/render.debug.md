# Render `{"extra":["x"]}`
```html
<main>
  <ul>
    <li>
      a
    </li>
    <li>
      x
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```

# Update `{"extra":["y"]}`
```html
<main>
  <ul>
    <li>
      a
    </li>
    <li>
      y
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(2)::text "x" => "y"
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
      y
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(2)::text "y" => "b"
INSERT: main > ul > li:nth-of-type(2) + li
```

# Update `{"extra":["z"]}`
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
      z
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(3)::text "y" => "z"
```
