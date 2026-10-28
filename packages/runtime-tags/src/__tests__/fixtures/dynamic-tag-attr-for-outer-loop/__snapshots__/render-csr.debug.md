# Render `{"on":true,"as":["x"],"bs":[1,2],"note":"n"}`
```html
<button
  class="inc"
>
  0
</button>
<ul>
  <li>
    x:1:n
  </li>
  <li>
    x:2:n
  </li>
</ul>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="inc"
>
  1
</button>
<ul>
  <li>
    x:1:n
  </li>
  <li>
    x:2:n
  </li>
</ul>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```

# Update `{"on":true,"as":["x","y"],"bs":[1],"note":"m"}`
```html
<button
  class="inc"
>
  1
</button>
<ul>
  <li>
    x:1:m
  </li>
</ul>
<ul>
  <li>
    y:1:m
  </li>
</ul>
```
## Change
```
REMOVE: ul:nth-of-type(1) > li + li
UPDATE: ul:nth-of-type(1) > li::text@4 "n" => "m"
INSERT: ul:nth-of-type(1) + ul
INSERT: ul:nth-of-type(2) > li
UPDATE: ul:nth-of-type(2) > li::text@4 "" => "m"
UPDATE: ul:nth-of-type(2) > li::text@0 "" => "y"
```

# Update `{"on":false,"as":["y"],"bs":[2],"note":"o"}`
```html
<button
  class="inc"
>
  1
</button>
<ol>
  <li>
    y:2:o
  </li>
</ol>
```
## Change
```
REMOVE: ol + ul
INSERT: .inc + ol
REMOVE: ol + ul
INSERT: ol > li
UPDATE: ol > li::text@4 "" => "o"
UPDATE: ol > li::text@0 "" => "y"
```

# Update `{"on":true,"as":["z"],"bs":[3],"note":"p"}`
```html
<button
  class="inc"
>
  1
</button>
<ul>
  <li>
    z:3:p
  </li>
</ul>
```
## Change
```
INSERT: .inc + ul
REMOVE: ul + ol
INSERT: ul > li
UPDATE: ul > li::text@4 "" => "p"
UPDATE: ul > li::text@0 "" => "z"
```
