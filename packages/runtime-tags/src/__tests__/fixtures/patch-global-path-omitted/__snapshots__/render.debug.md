# Render `{"$global":{"o":{"x":"a"},"k":"k","serializedGlobals":["o","k"]}}`
```html
<div>
  a
</div>
<p>
  k
</p>
```

# Update `{"$global":{"o":{"x":"b"},"k":"l","serializedGlobals":["k"]}}`
```html
<div>
  a
</div>
<p>
  l
</p>
```
## Change
```
UPDATE: p::text "k" => "l"
```
