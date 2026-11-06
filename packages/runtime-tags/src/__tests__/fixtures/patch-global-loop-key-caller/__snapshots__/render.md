# Render `{"m":2,"$global":{"x":"a","serializedGlobals":["x"]}}`
```html
<button>
  +
</button>
<ul>
  <li>
    0:a
  </li>
  <li>
    1:a
  </li>
</ul>
<ul>
  <li>
    0:a
  </li>
  <li>
    1:a
  </li>
</ul>
```

# Update `{"m":3,"$global":{"x":"b","serializedGlobals":["x"]}}`
```html
<button>
  +
</button>
<ul>
  <li>
    0:b
  </li>
  <li>
    1:b
  </li>
</ul>
<ul>
  <li>
    0:b
  </li>
  <li>
    1:b
  </li>
  <li>
    2:b
  </li>
</ul>
```
## Change
```
INSERT: ul:nth-of-type(2) > li:nth-of-type(2) + li
UPDATE: ul:nth-of-type(2) > li:nth-of-type(1)::text "0:a" => "0:b"
UPDATE: ul:nth-of-type(2) > li:nth-of-type(2)::text "1:a" => "1:b"
UPDATE: ul:nth-of-type(2) > li:nth-of-type(3)::text " " => "2:b"
UPDATE: ul:nth-of-type(1) > li:nth-of-type(1)::text "0:a" => "0:b"
UPDATE: ul:nth-of-type(1) > li:nth-of-type(2)::text "1:a" => "1:b"
```
