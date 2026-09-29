# Render `{"note":"n1"}`
```html
<main>
  <ul>
    <li>
      a: n1
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
      a: n1
    </li>
    <li>
      b: n1
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
UPDATE: main > ul > li:nth-of-type(2)::text@3 "" => "n1"
```

# Update `{"note":"n2"}`
```html
<main>
  <ul>
    <li>
      a: n2
    </li>
    <li>
      b: n2
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(1)::text@3 "n1" => "n2"
UPDATE: main > ul > li:nth-of-type(2)::text@3 "n1" => "n2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <ul>
    <li>
      a: n2
    </li>
    <li>
      b: n2
    </li>
    <li>
      b: n2
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
UPDATE: main > ul > li:nth-of-type(3)::text@3 "" => "n2"
```

# Update `{"note":"n3"}`
```html
<main>
  <ul>
    <li>
      a: n3
    </li>
    <li>
      b: n3
    </li>
    <li>
      b: n3
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(1)::text@3 "n2" => "n3"
UPDATE: main > ul > li:nth-of-type(2)::text@3 "n2" => "n3"
UPDATE: main > ul > li:nth-of-type(3)::text@3 "n2" => "n3"
```
