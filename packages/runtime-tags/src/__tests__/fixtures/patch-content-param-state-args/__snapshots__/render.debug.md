# Render `{"suffix":"a"}`
```html
<p>
  0
</p>
<em>
  a
</em>
<button>
  +
</button>
```

# Update `{"suffix":"b"}`
```html
<p>
  0
</p>
<em>
  b
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text "a" => "b"
```
