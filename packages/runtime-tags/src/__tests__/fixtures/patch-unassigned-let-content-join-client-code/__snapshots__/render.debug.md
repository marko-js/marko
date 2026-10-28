# Render `{"id":"u1","name":"a"}`
```html
<div>
  <p>
    u1-a
  </p>
</div>
<button>
  0
</button>
```

# Update `{"id":"u1","name":"b"}`
```html
<div>
  <p>
    u1-b
  </p>
</div>
<button>
  0
</button>
```
## Change
```
UPDATE: div > p::text "u1-a" => "u1-b"
```
