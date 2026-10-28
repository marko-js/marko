# Render `{"$global":{"o":{"x":"a"},"k":"k","serializedGlobals":["o","k"]}}`
```html
<button>
  t
</button>
<b>
  k
</b>
<p>
  a
</p>
```

# Update `{"$global":{"o":{"x":"b"},"k":"k","serializedGlobals":["o","k"]}}`
```html
<button>
  t
</button>
<b>
  k
</b>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
