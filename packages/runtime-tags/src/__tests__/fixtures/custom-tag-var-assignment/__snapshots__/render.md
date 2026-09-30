# Render
```html
<button
  class="inc-child"
>
  1
</button>
<button
  class="inc-parent"
>
  1
</button>
<button
  class="reset"
>
  reset
</button>
```

# Update `click("button.inc-child")`
```html
<button
  class="inc-child"
>
  2
</button>
<button
  class="inc-parent"
>
  2
</button>
<button
  class="reset"
>
  reset
</button>
```
## Change
```
UPDATE: .inc-child::text "1" => "2"
UPDATE: .inc-parent::text "1" => "2"
```

# Update `click("button.inc-parent")`
```html
<button
  class="inc-child"
>
  3
</button>
<button
  class="inc-parent"
>
  3
</button>
<button
  class="reset"
>
  reset
</button>
```
## Change
```
UPDATE: .inc-child::text "2" => "3"
UPDATE: .inc-parent::text "2" => "3"
```

# Update `click("button.reset")`
```html
<button
  class="inc-child"
>
  0
</button>
<button
  class="inc-parent"
>
  0
</button>
<button
  class="reset"
>
  reset
</button>
```
## Change
```
UPDATE: .inc-child::text "3" => "0"
UPDATE: .inc-parent::text "3" => "0"
```
