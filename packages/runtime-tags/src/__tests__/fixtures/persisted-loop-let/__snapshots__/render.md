# Render `{"items":[{"id":1,"label":"Apples","start":0},{"id":2,"label":"Bread","start":0}]}`
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

# Update `{"items":[{"id":2,"label":"Bread","start":0},{"id":1,"label":"Apples","start":0}]}`
```html
<ul>
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
UPDATE: ul > li:nth-of-type(1)::text "Bread" => "Bread"
UPDATE: ul > li:nth-of-type(2)::text "Apples" => "Apples"
REMOVE: ul > li:nth-of-type(2) + li
INSERT: ul > li
```

# Update `{"items":[{"id":2,"label":"Bread","start":0},{"id":3,"label":"Milk","start":5},{"id":1,"label":"Apples","start":0}]}`
```html
<ul>
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
      5
    </span>
    <button>
      +
    </button>
  </li>
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
UPDATE: ul > li:nth-of-type(1)::text "Bread" => "Bread"
UPDATE: ul > li:nth-of-type(3)::text "Apples" => "Apples"
INSERT: ul > li:nth-of-type(1) + li
UPDATE: ul > li:nth-of-type(2) > span::text " " => "5"
```

# Update
```js
document.querySelectorAll("button")[nth].click();
```
```html
<ul>
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
      6
    </span>
    <button>
      +
    </button>
  </li>
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
UPDATE: ul > li:nth-of-type(2) > span::text "5" => "6"
```

# Update `{"items":[{"id":2,"label":"Bread","start":0},{"id":1,"label":"Apples","start":0}]}`
```html
<ul>
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
UPDATE: ul > li:nth-of-type(1)::text "Bread" => "Bread"
UPDATE: ul > li:nth-of-type(2)::text "Apples" => "Apples"
REMOVE: ul > li:nth-of-type(1) + li
```

# Update `{"items":[{"id":2,"label":"Bread","start":0},{"id":3,"label":"Milk","start":5},{"id":1,"label":"Apples","start":0}]}`
```html
<ul>
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
      5
    </span>
    <button>
      +
    </button>
  </li>
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
UPDATE: ul > li:nth-of-type(1)::text "Bread" => "Bread"
UPDATE: ul > li:nth-of-type(3)::text "Apples" => "Apples"
INSERT: ul > li:nth-of-type(1) + li
UPDATE: ul > li:nth-of-type(2) > span::text " " => "5"
```
