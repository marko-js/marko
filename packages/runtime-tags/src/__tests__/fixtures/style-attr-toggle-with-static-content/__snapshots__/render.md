# Render
```html
<button />
<div
  style="border:1px solid black"
>
  foo bar
</div>
```

# Update `click("button")`
```html
<button />
<div
  style="border:1px solid black;display:none"
>
  foo bar
</div>
```
## Change
```
UPDATE: div[style] "border:1px solid black" => "border: 1px solid black; display: none;"
```

# Update `click("button")`
```html
<button />
<div
  style="border:1px solid black"
>
  foo bar
</div>
```
## Change
```
UPDATE: div[style] "border: 1px solid black; display: none;" => "border: 1px solid black;"
```

# Update `click("button")`
```html
<button />
<div
  style="border:1px solid black;display:none"
>
  foo bar
</div>
```
## Change
```
UPDATE: div[style] "border: 1px solid black;" => "border: 1px solid black; display: none;"
```
