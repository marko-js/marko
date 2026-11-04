# Render `{"items":[{"id":1,"name":"one"}]}`
```html
<ul>
  <li>
    one
  </li>
</ul>
<button>
  0
</button>
```

# Update `{"items":[{"id":1,"name":"one"},{"id":2,"name":"two","hot":true}]}`
```html
<ul>
  <li>
    one
  </li>
  <li>
    two 🔥
  </li>
</ul>
<button>
  0
</button>
```
## Change
```
INSERT: ul > li:nth-of-type(1) + li
UPDATE: ul > li:nth-of-type(2)::text@0 "" => "two"
UPDATE: ul > li:nth-of-type(2)::text@3 "" => " 🔥"
```

# Update `{"items":[{"id":2,"name":"two!"}]}`
```html
<ul>
  <li>
    two!
  </li>
</ul>
<button>
  0
</button>
```
## Change
```
REMOVE: ul > li
UPDATE: ul > li::text "two" => "two!"
UPDATE: ul > li::text " 🔥" => ""
```
