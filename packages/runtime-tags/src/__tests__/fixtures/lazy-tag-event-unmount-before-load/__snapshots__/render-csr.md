# Render
```html
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="load"
>
  Load
</button>
<button
  id="inc"
>
  Inc
</button>
```
## Console
```
WARN "A lazy load trigger could not find an element matching \"#load\". The module was loaded immediately."
```

# Update `click("#toggle")`

# Update `click("#load")`

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
  id="load"
>
  Load
</button>
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

# Update `click("#load")`

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
  id="load"
>
  Load
</button>
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
