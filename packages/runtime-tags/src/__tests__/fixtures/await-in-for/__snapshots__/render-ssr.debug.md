# Render `{"items":[{"label":"a"},{"label":"b"}]}`
```html
<ul>
  <li />
</ul>
```

# Update
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
## Change
```
INSERT: ul > li:nth-of-type(1)::text("a")
INSERT: ul > li:nth-of-type(1) + li
INSERT: ul > li:nth-of-type(2)::text("b")
```
