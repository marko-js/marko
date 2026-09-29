# Render `{"s":"!"}`
```html
<main>
  <ul>
    <li>
      a!
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```

# Update `{"s":"?"}`
```html
<main>
  <ul>
    <li>
      a?
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li::text@1 "!" => "?"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <ul>
    <li>
      a?
    </li>
    <li>
      b?
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
UPDATE: main > ul > li:nth-of-type(2)::text@1 "" => "?"
```

# Update `{"s":"."}`
```html
<main>
  <ul>
    <li>
      a.
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li::text@1 "?" => "."
REMOVE: main > ul > li + li
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <ul>
    <li>
      a.
    </li>
    <li>
      b.
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
UPDATE: main > ul > li:nth-of-type(2)::text@1 "" => "."
```

# Update `{"s":","}`
```html
<main>
  <ul>
    <li>
      a,
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li::text@1 "." => ","
REMOVE: main > ul > li + li
```
