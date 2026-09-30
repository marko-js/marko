# Render
```html
<button
  id="inc"
>
  1|1
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Update `click("#inc")`
```html
<button
  id="inc"
>
  3|3
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: #inc::text@0 "1" => "3"
UPDATE: #inc::text@2 "1" => "3"
```

# Update `click("#inc")`
```html
<button
  id="inc"
>
  5|5
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: #inc::text@0 "3" => "5"
UPDATE: #inc::text@2 "3" => "5"
```

# Update `click("#toggle")`

# Update `click("#inc")`
```html
<button
  id="inc"
>
  5|6
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: #inc::text@2 "5" => "6"
```

# Update `click("#inc")`
```html
<button
  id="inc"
>
  5|7
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: #inc::text@2 "6" => "7"
```
