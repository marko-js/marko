# Render `{"items":[{"id":1,"label":"Apples","detailed":true}]}`
```html
<ul>
  <li>
    Apples
    <span>
      0
    </span>
    <button>
      note
    </button>
  </li>
</ul>
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
    <button>
      note
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li > span::text "0" => "1"
```

# Update `{"items":[{"id":1,"label":"Fuji Apples","detailed":true}]}`
```html
<ul>
  <li>
    Fuji Apples
    <span>
      1
    </span>
    <button>
      note
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text "Apples" => "Fuji Apples"
```

# Update `{"items":[{"id":1,"label":"Fuji Apples","detailed":false}]}`
```html
<ul>
  <li>
    Fuji Apples
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text "Fuji Apples" => "Fuji Apples"
REMOVE: ul > li::text + span
REMOVE: ul > li::text + button
```

# Update `{"items":[{"id":1,"label":"Fuji Apples","detailed":true}]}`
```html
<ul>
  <li>
    Fuji Apples
    <span>
      0
    </span>
    <button>
      note
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text "Fuji Apples" => "Fuji Apples"
INSERT: ul > li::text + :is(span, button)
UPDATE: ul > li > span::text " " => "0"
```

# Update `{"items":[{"id":2,"label":"Milk","detailed":true},{"id":1,"label":"Fuji Apples","detailed":true}]}`
```html
<ul>
  <li>
    Milk
    <span>
      0
    </span>
    <button>
      note
    </button>
  </li>
  <li>
    Fuji Apples
    <span>
      0
    </span>
    <button>
      note
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)::text "Fuji Apples" => "Fuji Apples"
INSERT: ul > li
UPDATE: ul > li:nth-of-type(1) > span::text " " => "0"
```
