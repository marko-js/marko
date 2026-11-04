# Render `{"msg":"a"}`
```html
<p>
  a
</p>
```

# Update `{"msg":"b"}`
```html
<p>
  b
</p>
```
## Change
```
UPDATE: #document > html > head > meta[content] "a,b;a" => "a,b;b"
UPDATE: p::text "a" => "b"
```
