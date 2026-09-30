# Render
```html
<button
  class="inc"
>
  inc
</button>
<div
  class="result"
>
  0
</div>
```

# Update `click(".inc")`
```html
<button
  class="inc"
>
  inc
</button>
<div
  class="result"
>
  1
</div>
```
## Change
```
UPDATE: .result::text "0" => "1"
```

# Update `click(".inc")`
```html
<button
  class="inc"
>
  inc
</button>
<div
  class="result"
>
  2
</div>
```
## Change
```
UPDATE: .result::text "1" => "2"
```
