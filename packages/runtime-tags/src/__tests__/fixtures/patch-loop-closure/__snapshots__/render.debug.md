# Render `{"labels":["Apples"]}`
```html
<ul>
  <li>
    Apples
    <span>
      0
    </span>
  </li>
</ul>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    Apples
    <span>
      1
    </span>
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li > span::text "0" => "1"
```

# Update `{"labels":["Apples","Bread"]}`
```html
<ul>
  <li>
    Apples
    <span>
      1
    </span>
  </li>
  <li>
    Bread
    <span>
      1
    </span>
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "Apples" => "Apples"
INSERT: ul > li:nth-of-type(1) + li
UPDATE: ul > li:nth-of-type(2) > span::text " " => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    Apples
    <span>
      2
    </span>
  </li>
  <li>
    Bread
    <span>
      2
    </span>
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > span::text "1" => "2"
UPDATE: ul > li:nth-of-type(2) > span::text "1" => "2"
```

# Update `{"labels":["Apples","Bread","Milk"]}`
```html
<ul>
  <li>
    Apples
    <span>
      2
    </span>
  </li>
  <li>
    Bread
    <span>
      2
    </span>
  </li>
  <li>
    Milk
    <span>
      2
    </span>
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "Apples" => "Apples"
UPDATE: ul > li:nth-of-type(2)::text "Bread" => "Bread"
INSERT: ul > li:nth-of-type(2) + li
UPDATE: ul > li:nth-of-type(3) > span::text " " => "2"
```
