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
  <li>
    2:a
  </li>
</ul>
```
## Change
```
INSERT: ul:nth-of-type(2) > li:nth-of-type(2) + li
```
