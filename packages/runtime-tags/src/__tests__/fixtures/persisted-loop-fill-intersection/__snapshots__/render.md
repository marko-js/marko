# Render `{"note":"n1"}`
```html
<main>
  <ul>
    <li>
      n1a0
    </li>
  </ul>
  <button
    class="add"
  >
    +
  </button>
  <button
    class="inc"
  >
    c
  </button>
</main>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<main>
  <ul>
    <li>
      n1a1
    </li>
  </ul>
  <button
    class="add"
  >
    +
  </button>
  <button
    class="inc"
  >
    c
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li::text "n1a0" => "n1a1"
```

# Update `{"note":"n2"}`
```html
<main>
  <ul>
    <li>
      n2a1
    </li>
  </ul>
  <button
    class="add"
  >
    +
  </button>
  <button
    class="inc"
  >
    c
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li::text "n1a1" => "n2a1"
```

# Update
```js
document.querySelector(".add").click();
```
```html
<main>
  <ul>
    <li>
      n2a1
    </li>
    <li>
      n2b1
    </li>
  </ul>
  <button
    class="add"
  >
    +
  </button>
  <button
    class="inc"
  >
    c
  </button>
</main>
```
## Change
```
INSERT: main > ul > li:nth-of-type(1) + li
UPDATE: main > ul > li:nth-of-type(2)::text " " => "n2b1"
```

# Update `{"note":"n3"}`
```html
<main>
  <ul>
    <li>
      n3a1
    </li>
    <li>
      n3b1
    </li>
  </ul>
  <button
    class="add"
  >
    +
  </button>
  <button
    class="inc"
  >
    c
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(1)::text "n2a1" => "n3a1"
UPDATE: main > ul > li:nth-of-type(2)::text "n2b1" => "n3b1"
```
