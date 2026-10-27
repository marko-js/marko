# Render `{"$global":{"o":{"x":"a","y":1},"serializedGlobals":["o"]}}`
```html
<button>
  t
</button>
<p>
  a
</p>
```
## Console
```
LOG "p" "a"
```

# Update `{"$global":{"o":{"x":"a","y":2},"serializedGlobals":["o"]}}`

# Update `{"$global":{"o":{"x":"b","y":2},"serializedGlobals":["o"]}}`
```html
<button>
  t
</button>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
## Console
```
LOG "p" "b"
```
