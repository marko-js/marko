# Render `{"items":[{"id":"a","children":[]}]}`
```html
<ul>
  <li>
    a
  </li>
</ul>
```

# Update `{"items":[{"id":"a","children":[]},{"id":"b","children":["x"]}]}`
```html
<ul>
  <li>
    a
  </li>
  <li>
    b
    <ul>
      <li>
        x
      </li>
    </ul>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "a" => "a"
INSERT: ul > li:nth-of-type(1) + li
```

# Update `{"items":[{"id":"b","children":["x","y"]},{"id":"c","children":[]}]}`
```html
<ul>
  <li>
    b
    <ul>
      <li>
        x
      </li>
      <li>
        y
      </li>
    </ul>
  </li>
  <li>
    c
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "b" => "b"
UPDATE: ul > li:nth-of-type(1) > ul > li:nth-of-type(1)::text "x" => "x"
INSERT: ul > li:nth-of-type(1) > ul > li:nth-of-type(1) + li
REMOVE: ul > li
INSERT: ul > li:nth-of-type(1) + li
```
