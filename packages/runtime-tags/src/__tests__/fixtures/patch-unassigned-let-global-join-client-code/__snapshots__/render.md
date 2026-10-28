# Render `{"id":"u1","$global":{"x":"a","serializedGlobals":["x"]}}`
```html
<p>
  u1-a
</p>
<button>
  0
</button>
```

# Update `{"id":"u1","$global":{"x":"b","serializedGlobals":["x"]}}`
```html
<p>
  u1-b
</p>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "u1-a" => "u1-b"
```
