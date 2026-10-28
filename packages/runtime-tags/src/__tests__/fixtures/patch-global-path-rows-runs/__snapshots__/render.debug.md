# Render `{"$global":{"o":{"x":"a","y":1},"serializedGlobals":["o"]}}`
```html
<button>
  +
</button>
<ul>
  <li>
    a
  </li>
</ul>
```
## Console
```
LOG "li" "a"
```

# Update `{"$global":{"o":{"x":"a","y":2},"serializedGlobals":["o"]}}`

# Update `{"$global":{"o":{"x":"b","y":2},"serializedGlobals":["o"]}}`
```html
<button>
  +
</button>
<ul>
  <li>
    b
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text "a" => "b"
```
## Console
```
LOG "li" "b"
```
