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
INSERT: #a::text("Apple")
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
INSERT: #b::text("Banana")
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
INSERT: #c::text("Cherry")
```
