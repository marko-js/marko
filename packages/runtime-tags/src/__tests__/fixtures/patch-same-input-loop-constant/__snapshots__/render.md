# Render `{"items":[{"id":"a"},{"id":"b"}]}`
```html
<ul>
  <li>
    a:1
  </li>
  <li>
    b:2
  </li>
</ul>
```

# Update `{"items":[{"id":"a"},{"id":"b"}]}`

# Update `{"items":[{"id":"a"},{"id":"b"},{"id":"c"}]}`
```html
<ul>
  <li>
    a:1
  </li>
  <li>
    b:2
  </li>
  <li>
    c:7
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(2) + li
```
