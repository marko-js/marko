# Render `{"first":"f1"}`
```html
<main>
  <ul>
    <li>
      f1
    </li>
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
      f1
    </li>
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
INSERT: main > ul > li:nth-of-type(2) + li
```

# Update `{"first":"f2"}`
```html
<main>
  <ul>
    <li>
      f2
    </li>
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
UPDATE: main > ul > li:nth-of-type(1)::text "f1" => "f2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <ul>
    <li>
      f2
    </li>
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
INSERT: main > ul > li:nth-of-type(3) + li
```

# Update `{"first":"f3"}`
```html
<main>
  <ul>
    <li>
      f3
    </li>
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
UPDATE: main > ul > li:nth-of-type(1)::text "f2" => "f3"
```
