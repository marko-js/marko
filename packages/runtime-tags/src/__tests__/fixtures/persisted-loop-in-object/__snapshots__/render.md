# Render `{"note":"n1"}`
```html
<main>
  <ul>
    <li>
      a=1 (n1)
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
      a=1 (n1)
    </li>
    <li>
      k1=2 (n1)
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
UPDATE: main > ul > li:nth-of-type(2)::text@6 "" => "n1"
UPDATE: main > ul > li:nth-of-type(2)::text@0 "" => "k1"
```

# Update `{"note":"n2"}`
```html
<main>
  <ul>
    <li>
      a=1 (n2)
    </li>
    <li>
      k1=2 (n2)
    </li>
  </ul>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(1)::text@5 "n1" => "n2"
UPDATE: main > ul > li:nth-of-type(2)::text@6 "n1" => "n2"
```
