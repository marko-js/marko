# Render
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
  1
</span>
```
## Change
```
UPDATE: #child::text "0" => "1"
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
