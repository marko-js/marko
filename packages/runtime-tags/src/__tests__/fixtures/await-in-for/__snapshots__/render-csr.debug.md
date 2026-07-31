# Render `{"items":[{"label":"a"},{"label":"b"}]}`
```html
<ul>
  <li />
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
INSERT: ul > li:nth-of-type(2)::text("b")
UPDATE: ul > li:nth-of-type(1)::text " " => "a"
UPDATE: ul > li:nth-of-type(2)::text " " => "b"
```
