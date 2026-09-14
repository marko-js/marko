# Render `{"note":"n1"}`
```html
<main>
  <ul>
    <li>
      a
      <em>
        n1
      </em>
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
      a
      <em>
        n1
      </em>
    </li>
    <li>
      b
      <em>
        n1
      </em>
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
UPDATE: main > ul > li:nth-of-type(2) > em::text " " => "n1"
```

# Update `{"note":"n2"}`
```html
<main>
  <ul>
    <li>
      a
      <em>
        n2
      </em>
    </li>
    <li>
      b
      <em>
        n2
      </em>
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(1) > em::text "n1" => "n2"
UPDATE: main > ul > li:nth-of-type(2) > em::text "n1" => "n2"
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
      <em>
        n2
      </em>
    </li>
    <li>
      b
      <em>
        n2
      </em>
    </li>
    <li>
      b
      <em>
        n2
      </em>
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
UPDATE: main > ul > li:nth-of-type(3) > em::text " " => "n2"
```

# Update `{"note":"n3"}`
```html
<main>
  <ul>
    <li>
      a
      <em>
        n3
      </em>
    </li>
    <li>
      b
      <em>
        n3
      </em>
    </li>
    <li>
      b
      <em>
        n3
      </em>
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(1) > em::text "n2" => "n3"
UPDATE: main > ul > li:nth-of-type(2) > em::text "n2" => "n3"
UPDATE: main > ul > li:nth-of-type(3) > em::text "n2" => "n3"
```
