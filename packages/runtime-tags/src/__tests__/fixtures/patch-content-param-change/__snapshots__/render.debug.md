# Render `{"suffix":"a"}`
```html
<span>
  0a
</span>
<p>
  [0a]
</p>
<button>
  +
</button>
```

# Update `{"suffix":"b"}`
```html
<span>
  0b
</span>
<p>
  [0b]
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "[0a]" => "[0b]"
UPDATE: span::text "0a" => "0b"
```
