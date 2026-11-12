# Render `{"$global":{"x":"a","serializedGlobals":["x"]}}`
```html
<button>
  t
</button>
<p>
  a
</p>
```

# Update `{"$global":{"x":"b","serializedGlobals":["x"]}}`
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
UPDATE: body[data-x] "a" => "b"
```
