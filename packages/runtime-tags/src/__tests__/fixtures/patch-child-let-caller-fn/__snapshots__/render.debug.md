# Render `{"label":"a"}`
```html
<p>
  f-a
</p>
<button>
  0
</button>
```

# Update `{"label":"b"}`
```html
<p>
  f-b
</p>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "f-a" => "f-b"
```
