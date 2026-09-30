# Render `{"value":42}`
```html
<button
  id="inc"
>
  Inc
</button>
<span
  id="child"
>
  0
</span>
```

# Update `click("#inc")`
```html
<button
  id="inc"
>
  Inc
</button>
<span
  id="child"
>
  1
</span>
```
## Change
```
UPDATE: #child::text "0" => "1"
```
