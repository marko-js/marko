# Render `{"id":"u1","name":"a"}`
```html
<p>
  u1-a
</p>
<button>
  0
</button>
```

# Update `{"id":"u1","name":"b"}`
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
