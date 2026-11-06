# Render `{"suffix":"1","items":["x"]}`
```html
<ul>
  <li>
    a1
  </li>
</ul>
<ul>
  <li>
    x1
  </li>
</ul>
<button>
  +
</button>
```

# Update `{"suffix":"2","items":["x","y"]}`
```html
<ul>
  <li>
    a2
  </li>
</ul>
<ul>
  <li>
    x2
  </li>
  <li>
    y2
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul:nth-of-type(1) > li::text@1 "1" => "2"
UPDATE: ul:nth-of-type(2) > li:nth-of-type(1)::text@1 "1" => "2"
INSERT: ul:nth-of-type(2) > li:nth-of-type(1) + li
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    a2
  </li>
  <li>
    b2
  </li>
</ul>
<ul>
  <li>
    x2
  </li>
  <li>
    y2
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
INSERT: ul:nth-of-type(1) > li:nth-of-type(1) + li
UPDATE: ul:nth-of-type(1) > li:nth-of-type(2)::text@1 "" => "2"
```

# Update `{"suffix":"3","items":["y"]}`
```html
<ul>
  <li>
    a3
  </li>
  <li>
    b3
  </li>
</ul>
<ul>
  <li>
    y3
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul:nth-of-type(1) > li:nth-of-type(1)::text@1 "2" => "3"
UPDATE: ul:nth-of-type(2) > li::text@0 "x" => "y"
UPDATE: ul:nth-of-type(2) > li::text@1 "2" => "3"
REMOVE: ul:nth-of-type(2) > li + li
UPDATE: ul:nth-of-type(1) > li:nth-of-type(2)::text@1 "2" => "3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    a3
  </li>
</ul>
<ul>
  <li>
    y3
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
REMOVE: ul:nth-of-type(1) > li + li
```

# Update `{"suffix":"4","items":["y"]}`
```html
<ul>
  <li>
    a4
  </li>
</ul>
<ul>
  <li>
    y4
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul:nth-of-type(1) > li::text@1 "3" => "4"
UPDATE: ul:nth-of-type(2) > li::text@1 "3" => "4"
```
