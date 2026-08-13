# Render `{"items":[{"id":"a","label":"Apple"},{"id":"b","label":"Banana"},{"id":"c","label":"Cherry"}]}`
```html
<ul />
```

# Update
```html
<ul>
  <li
    id="a"
  >
    Apple
  </li>
</ul>
```
## Change
```
INSERT: ul > #a
UPDATE: #a[id] null => "a"
UPDATE: #a::text " " => "Apple"
```

# Update
```html
<ul>
  <li
    id="a"
  >
    Apple
  </li>
  <li
    id="b"
  >
    Banana
  </li>
</ul>
```
## Change
```
INSERT: #a + #b
UPDATE: #b[id] null => "b"
UPDATE: #b::text " " => "Banana"
```

# Update
```html
<ul>
  <li
    id="a"
  >
    Apple
  </li>
  <li
    id="b"
  >
    Banana
  </li>
  <li
    id="c"
  >
    Cherry
  </li>
</ul>
```
## Change
```
INSERT: #b + #c
UPDATE: #c[id] null => "c"
UPDATE: #c::text " " => "Cherry"
```

# Update `{"items":[{"id":"c","label":"Cherry"},{"id":"a","label":"Apricot"},{"id":"d","label":"Date"}]}`

# Update
```html
<ul>
  <li
    id="c"
  >
    Cherry
  </li>
  <li
    id="a"
  >
    Apple
  </li>
  <li
    id="b"
  >
    Banana
  </li>
</ul>
```
## Change
```
REMOVE: #b + #c
INSERT: ul > #c
```

# Update
```html
<ul>
  <li
    id="c"
  >
    Cherry
  </li>
  <li
    id="a"
  >
    Apricot
  </li>
  <li
    id="b"
  >
    Banana
  </li>
</ul>
```
## Change
```
UPDATE: #a::text "Apple" => "Apricot"
```

# Update
```html
<ul>
  <li
    id="c"
  >
    Cherry
  </li>
  <li
    id="a"
  >
    Apricot
  </li>
  <li
    id="d"
  >
    Date
  </li>
  <li
    id="b"
  >
    Banana
  </li>
</ul>
```
## Change
```
INSERT: #a + #d
UPDATE: #d[id] null => "d"
UPDATE: #d::text " " => "Date"
```

# Update
```html
<ul>
  <li
    id="c"
  >
    Cherry
  </li>
  <li
    id="a"
  >
    Apricot
  </li>
  <li
    id="d"
  >
    Date
  </li>
</ul>
```
## Change
```
REMOVE: #d + #b
```
