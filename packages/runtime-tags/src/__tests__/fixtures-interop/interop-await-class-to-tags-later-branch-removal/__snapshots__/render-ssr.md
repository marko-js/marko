# Render

# Update
```html
<button
  class="inc"
>
  0
</button>
<span>
  shown
</span>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
INSERT: .inc
INSERT: .inc::text("0")
INSERT: span
INSERT: span::text("shown")
INSERT: span + .hide
INSERT: .hide::text("hide")
```

# Update `click(".hide")`
```html
<button
  class="inc"
>
  0
</button>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
REMOVE: .inc + span
```

# Update `click(".inc")`
```html
<button
  class="inc"
>
  1
</button>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```
