# Render `{"items":["a","b","c"]}`
```html
<ul />
```

# Update
```html
<ul>
  <li>
    0: a (0)
  </li>
</ul>
```
## Change
```
INSERT: ul > li
INSERT: ul > li::text("0: a (")
INSERT: ul > li::text@0 + ::text("0")
INSERT: ul > li::text@6 + ::text(")")
```

# Update
```html
<ul>
  <li>
    0: a (0)
  </li>
  <li>
    1: b (0)
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) + li
INSERT: ul > li:nth-of-type(2)::text("1: b (")
INSERT: ul > li:nth-of-type(2)::text@0 + ::text("0")
INSERT: ul > li:nth-of-type(2)::text@6 + ::text(")")
```

# Update
```html
<ul>
  <li>
    0: a (0)
  </li>
  <li>
    1: b (0)
  </li>
  <li>
    2: c (0)
  </li>
</ul>
<button>
  inc
</button>
```
## Change
```
INSERT: ul > li:nth-of-type(2) + li
INSERT: ul > li:nth-of-type(3)::text("2: c (")
INSERT: ul > li:nth-of-type(3)::text@0 + ::text("0")
INSERT: ul > li:nth-of-type(3)::text@6 + ::text(")")
INSERT: ul + button
INSERT: button::text("inc")
```
