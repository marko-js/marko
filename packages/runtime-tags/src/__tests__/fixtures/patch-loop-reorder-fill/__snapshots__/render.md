# Render `{"note":"n1"}`
```html
<main>
  <ul>
    <li>
      1: n1
    </li>
    <li>
      2: n1
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
      3: n1
    </li>
    <li>
      1: n1
    </li>
    <li>
      2: n1
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
UPDATE: main > ul > li:nth-of-type(1)::text@3 "" => "n1"
```

# Update `{"note":"n2"}`
```html
<main>
  <ul>
    <li>
      3: n2
    </li>
    <li>
      1: n2
    </li>
    <li>
      2: n2
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
UPDATE: main > ul > li:nth-of-type(3)::text@3 "n1" => "n2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <ul>
    <li>
      4: n2
    </li>
    <li>
      3: n2
    </li>
    <li>
      1: n2
    </li>
    <li>
      2: n2
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
UPDATE: main > ul > li:nth-of-type(1)::text@3 "" => "n2"
```

# Update `{"note":"n3"}`
```html
<main>
  <ul>
    <li>
      4: n3
    </li>
    <li>
      3: n3
    </li>
    <li>
      1: n3
    </li>
    <li>
      2: n3
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
UPDATE: main > ul > li:nth-of-type(4)::text@3 "n2" => "n3"
```
