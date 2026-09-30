# Render
```html
<button
  class="inc"
>
  1
</button>
<span>
  2
</span>
<button
  class="mul"
>
  1
</button>
```

# Update `click(".inc")`
```html
<button
  class="inc"
>
  2
</button>
<span>
  4
</span>
<button
  class="mul"
>
  1
</button>
```
## Change
```
UPDATE: .inc::text "1" => "2"
UPDATE: span::text "2" => "4"
```

# Update `click(".mul")`
```html
<button
  class="inc"
>
  2
</button>
<span>
  4
</span>
<button
  class="mul"
>
  10
</button>
```
## Change
```
UPDATE: .mul::text "1" => "10"
```

# Update `click(".inc")`
```html
<button
  class="inc"
>
  3
</button>
<span>
  6
</span>
<button
  class="mul"
>
  10
</button>
```
## Change
```
UPDATE: .inc::text "2" => "3"
UPDATE: span::text "4" => "6"
```
