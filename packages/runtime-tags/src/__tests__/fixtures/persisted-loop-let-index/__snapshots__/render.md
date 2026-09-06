# Render `{"labels":["Apples","Bread"]}`
```html
<ul>
  <li>
    Apples
    <span>
      0
    </span>
    <button>
      +
    </button>
  </li>
  <li>
    Bread
    <span>
      0
    </span>
    <button>
      +
    </button>
  </li>
</ul>
```

# Update
```js
document.querySelectorAll("button")[nth].click();
```
```html
<ul>
  <li>
    Apples
    <span>
      1
    </span>
    <button>
      +
    </button>
  </li>
  <li>
    Bread
    <span>
      0
    </span>
    <button>
      +
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > span::text "0" => "1"
```

# Update `{"labels":["Apples","Bread","Milk"]}`
```html
<ul>
  <li>
    Apples
    <span>
      1
    </span>
    <button>
      +
    </button>
  </li>
  <li>
    Bread
    <span>
      0
    </span>
    <button>
      +
    </button>
  </li>
  <li>
    Milk
    <span>
      0
    </span>
    <button>
      +
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "Apples" => "Apples"
UPDATE: ul > li:nth-of-type(2)::text "Bread" => "Bread"
INSERT: ul > li:nth-of-type(2) + li
UPDATE: ul > li:nth-of-type(3) > span::text " " => "0"
```

# Update
```js
document.querySelectorAll("button")[nth].click();
```
```html
<ul>
  <li>
    Apples
    <span>
      1
    </span>
    <button>
      +
    </button>
  </li>
  <li>
    Bread
    <span>
      0
    </span>
    <button>
      +
    </button>
  </li>
  <li>
    Milk
    <span>
      1
    </span>
    <button>
      +
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(3) > span::text "0" => "1"
```

# Update `{"labels":["Apples"]}`
```html
<ul>
  <li>
    Apples
    <span>
      1
    </span>
    <button>
      +
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text "Apples" => "Apples"
REMOVE: ul > li + li
REMOVE: ul > li + li
```

# Update `{"labels":["Apples","Bread","Milk"]}`
```html
<ul>
  <li>
    Apples
    <span>
      1
    </span>
    <button>
      +
    </button>
  </li>
  <li>
    Bread
    <span>
      0
    </span>
    <button>
      +
    </button>
  </li>
  <li>
    Milk
    <span>
      0
    </span>
    <button>
      +
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "Apples" => "Apples"
INSERT: ul > li:nth-of-type(1) + li
INSERT: ul > li:nth-of-type(2) + li
UPDATE: ul > li:nth-of-type(2) > span::text " " => "0"
UPDATE: ul > li:nth-of-type(3) > span::text " " => "0"
```
