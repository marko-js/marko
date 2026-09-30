# Render
```html
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="inc"
>
  Inc
</button>
```

# Update `click("#toggle")`

# Update `click("#toggle")`
```html
<button
  id="toggle"
>
  Toggle
</button>
<span>
  0
</span>
<button
  id="inc"
>
  Inc
</button>
```
## Change
```
INSERT: #toggle + span
```
## Console
```
LOG "loaded"
```

# Update `click("#inc")`
```html
<button
  id="toggle"
>
  Toggle
</button>
<span>
  1
</span>
<button
  id="inc"
>
  Inc
</button>
```
## Change
```
UPDATE: span::text "0" => "1"
```
