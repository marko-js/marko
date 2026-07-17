# Render `{"items":["a","b"]}`
```html
<ul>
  <li>
    a
  </li>
  <li>
    b
  </li>
</ul>
```

# Update `{"items":["a","b","c"]}`
```html
<ul>
  <li>
    a
  </li>
  <li>
    b
  </li>
  <li>
    c
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(2) + li
```

# Update `{"items":["x"]}`
```html
<ul>
  <li>
    x
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text "a" => "x"
REMOVE: ul > li + li
REMOVE: ul > li + li
```
