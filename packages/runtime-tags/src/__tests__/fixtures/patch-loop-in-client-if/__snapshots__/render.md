# Render `{"note":"n1"}`
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="add"
  >
    +
  </button>
</main>
```

# Update
```js
document.querySelector(".add").click();
```

# Update
```js
document.querySelector(".toggle").click();
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
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="add"
  >
    +
  </button>
</main>
```
## Change
```
INSERT: main > ul
INSERT: main > ul > li
INSERT: main > ul > li:nth-of-type(1) + li
UPDATE: main > ul > li:nth-of-type(1)::text@3 "" => "n1"
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
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="add"
  >
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
document.querySelector(".add").click();
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
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="add"
  >
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
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="add"
  >
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
