# Render `{"$global":{"x":"a","serializedGlobals":["x"]}}`
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
```

# Update `{"$global":{"x":"b","serializedGlobals":["x"]}}`
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
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "0:a" => "0:b"
UPDATE: ul > li:nth-of-type(2)::text "1:a" => "1:b"
```
