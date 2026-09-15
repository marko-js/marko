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
UPDATE: ul > li:nth-of-type(1)::text "one" => "one"
UPDATE: ul > li:nth-of-type(1)::text "" => ""
INSERT: ul > li:nth-of-type(1) + li
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
UPDATE: ul > li::text "two" => "two!"
UPDATE: ul > li::text " 🔥" => ""
REMOVE: ul > li
```
