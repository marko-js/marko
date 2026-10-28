# Render `{"label":"a"}`
```html
<p>
  a:1
</p>
<button>
  interactive
</button>
```

# Update `{"label":"b"}`
```html
<p>
  b:1
</p>
<button>
  interactive
</button>
```
## Change
```
UPDATE: p::text@0 "a" => "b"
```
