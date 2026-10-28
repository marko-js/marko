# Render `{"a":"a1","b":"b1","items":[1,2]}`
```html
<ul>
  <li>
    a1b11
  </li>
  <li>
    a1b12
  </li>
</ul>
```

# Update `{"a":"a2","b":"b2","items":[1,2]}`
```html
<ul>
  <li>
    a1b21
  </li>
  <li>
    a1b22
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "a1b11" => "a1b21"
UPDATE: ul > li:nth-of-type(2)::text "a1b12" => "a1b22"
```
