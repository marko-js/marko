# Render `{"title":"a","p":{}}`
```html
<button>
  toggle
</button>
<p>
  a boom one
</p>
```

# Update `{"title":"b","p":{}}`
```html
<button>
  toggle
</button>
<p>
  b boom one
</p>
```
## Change
```
UPDATE: p::text@0 "a" => "b"
```
