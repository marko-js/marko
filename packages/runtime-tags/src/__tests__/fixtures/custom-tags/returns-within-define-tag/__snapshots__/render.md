# Render
```html
<button
  class="once"
>
  0
</button>
<button
  class="twice"
>
  0
</button>
```

# Update `click("button.once")`
```html
<button
  class="once"
>
  1
</button>
<button
  class="twice"
>
  0
</button>
```
## Change
```
UPDATE: .once::text "0" => "1"
```

# Update `click("button.once")`

# Update `click("button.twice")`
```html
<button
  class="once"
>
  1
</button>
<button
  class="twice"
>
  1
</button>
```
## Change
```
UPDATE: .twice::text "0" => "1"
```

# Update `click("button.twice")`
```html
<button
  class="once"
>
  1
</button>
<button
  class="twice"
>
  2
</button>
```
## Change
```
UPDATE: .twice::text "1" => "2"
```

# Update `click("button.twice")`
