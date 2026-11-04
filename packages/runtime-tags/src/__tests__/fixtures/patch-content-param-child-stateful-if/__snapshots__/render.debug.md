# Render `{"suffix":"a"}`
```html
<em>
  a
</em>
<button>
  toggle
</button>
```

# Update `{"suffix":"b"}`
```html
<em>
  b
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "a" => "b"
```
