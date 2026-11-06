# Render `{"items":["a"],"$global":{"x":"1","serializedGlobals":["x"]}}`
```html
<button>
  0
</button>
<ul>
  <li>
    a:1:0
  </li>
</ul>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<ul>
  <li>
    a:1:1
  </li>
</ul>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: ul > li::text@4 "0" => "1"
```

# Update `{"items":["a","b","c"],"$global":{"x":"2","serializedGlobals":["x"]}}`
```html
<button>
  1
</button>
<ul>
  <li>
    a:2:1
  </li>
  <li>
    b:2:1
  </li>
  <li>
    c:2:1
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@2 "1" => "2"
INSERT: ul > li:nth-of-type(1) + li
INSERT: ul > li:nth-of-type(2) + li
UPDATE: ul > li:nth-of-type(2)::text@4 "" => "1"
UPDATE: ul > li:nth-of-type(3)::text@4 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<ul>
  <li>
    a:2:2
  </li>
  <li>
    b:2:2
  </li>
  <li>
    c:2:2
  </li>
</ul>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: ul > li:nth-of-type(1)::text@4 "1" => "2"
UPDATE: ul > li:nth-of-type(2)::text@4 "1" => "2"
UPDATE: ul > li:nth-of-type(3)::text@4 "1" => "2"
```

# Update `{"items":["c"],"$global":{"x":"3","serializedGlobals":["x"]}}`
```html
<button>
  2
</button>
<ul>
  <li>
    c:3:2
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text@0 "a" => "c"
UPDATE: ul > li::text@2 "2" => "3"
REMOVE: ul > li + li
REMOVE: ul > li + li
```
