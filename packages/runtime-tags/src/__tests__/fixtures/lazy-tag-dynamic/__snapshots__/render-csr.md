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
```

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
  x: 1
</div>
```
## Change
```
INSERT: .inc + div
```

# Update `click(".inc")`
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
UPDATE: div::text@0 "" => "x"
UPDATE: div::text@3 "" => "2"
```

# Update `click(".inc")`
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
  x: 3
</div>
```
## Change
```
UPDATE: div::text@3 "2" => "3"
```
