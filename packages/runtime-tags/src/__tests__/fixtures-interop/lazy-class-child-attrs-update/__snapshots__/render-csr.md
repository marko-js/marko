# Render
```html
<button
  id="inc"
>
  Inc
</button>
```

# Update `click("#inc")`

# Update
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
INSERT: #inc + #child
INSERT: #child::text("1")
```
## Console
```
LOG "loaded"
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
  2
</span>
```
## Change
```
UPDATE: #child::text "1" => "2"
```
