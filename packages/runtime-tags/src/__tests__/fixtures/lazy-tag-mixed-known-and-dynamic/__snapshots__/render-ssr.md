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
<span>
  0
</span>
<span>
  0
</span>
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
<span>
  1
</span>
<span>
  1
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "0" => "1"
UPDATE: span:nth-of-type(2)::text "0" => "1"
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
<span>
  1
</span>
```
## Change
```
REMOVE: span + span
```
