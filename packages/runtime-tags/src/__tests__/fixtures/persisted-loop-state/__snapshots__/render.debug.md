# Render `{"items":[{"id":1,"label":"Apples"},{"id":2,"label":"Bread"}]}`
```html
<main>
  <ul>
    <li>
      Apples (0)
    </li>
    <li>
      Bread (0)
    </li>
  </ul>
  <button>
    Count 0
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
      Apples (1)
    </li>
    <li>
      Bread (1)
    </li>
  </ul>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "0" => "1"
UPDATE: main > ul > li:nth-of-type(1)::text@8 "0" => "1"
UPDATE: main > ul > li:nth-of-type(2)::text@7 "0" => "1"
```

# Update `{"items":[{"id":2,"label":"Rye"}]}`
```html
<main>
  <ul>
    <li>
      Rye (1)
    </li>
  </ul>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
REMOVE: main > ul > li
UPDATE: main > ul > li::text@0 "Bread" => "Rye"
```

# Update `{"items":[{"id":2,"label":"Rye"},{"id":3,"label":"Milk"}]}`
