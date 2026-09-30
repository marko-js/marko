# Render `{"active":false}`
```html
<svg
  class="icon"
>
  <circle
    class="off"
    cx="50"
    cy="50"
    r="40"
  />
</svg>
```

# Update `{"active":true}`
```html
<svg
  class="icon active"
>
  <circle
    class="on"
    cx="50"
    cy="50"
    r="40"
  />
</svg>
```
## Change
```
UPDATE: .icon.active[class] "icon" => "icon active"
UPDATE: .on[class] "off" => "on"
```

# Update `{"active":false}`
```html
<svg
  class="icon"
>
  <circle
    class="off"
    cx="50"
    cy="50"
    r="40"
  />
</svg>
```
## Change
```
UPDATE: .icon[class] "icon active" => "icon"
UPDATE: .off[class] "on" => "off"
```
