# Render
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<div>
  x: 1
</div>
```

# Update `click(".inc")`

# Update
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<div>
  x: 2
</div>
```
## Change
```
UPDATE: div::text@3 "1" => "2"
```

# Update `click(".toggle")`
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
```
## Change
```
REMOVE: .inc + div
```

# Update `click(".toggle")`

# Update
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<div>
  x: 2
</div>
```
## Change
```
INSERT: .inc + div
```
