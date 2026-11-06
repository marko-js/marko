# Render `{"rows":[1]}`
```html
<button>
  open
</button>
<ul>
  <li>
    <button
      class="row"
    >
      1:0
    </button>
  </li>
</ul>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button>
  close
</button>
<ul>
  <li>
    <button
      class="row"
    >
      1:0
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: button::text "open" => "close"
```

# Update `{"rows":[1,2]}`
```html
<button>
  close
</button>
<ul>
  <li>
    <button
      class="row"
    >
      1:0
    </button>
  </li>
  <li>
    <button
      class="row"
    >
      2:0
    </button>
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) + li
UPDATE: ul > li:nth-of-type(2) > button::text@0 "" => "2"
UPDATE: ul > li:nth-of-type(2) > button::text@2 "" => "0"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button>
  close
</button>
<ul>
  <li>
    <button
      class="row"
    >
      1:1
    </button>
  </li>
  <li>
    <button
      class="row"
    >
      2:0
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > button::text@2 "0" => "1"
```

# Update `{"rows":[2,3]}`
```html
<button>
  close
</button>
<ul>
  <li>
    <button
      class="row"
    >
      2:0
    </button>
  </li>
  <li>
    <button
      class="row"
    >
      3:0
    </button>
  </li>
</ul>
```
## Change
```
REMOVE: ul > li
INSERT: ul > li:nth-of-type(1) + li
UPDATE: ul > li:nth-of-type(2) > button::text@0 "" => "3"
UPDATE: ul > li:nth-of-type(2) > button::text@2 "" => "0"
```
