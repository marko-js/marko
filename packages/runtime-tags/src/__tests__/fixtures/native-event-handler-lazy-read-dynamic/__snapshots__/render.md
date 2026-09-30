# Render
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="act"
>
  act
</button>
<div
  class="state"
>
  true:0
</div>
<div
  class="log"
/>
```

# Update `click(".bump")`
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="act"
>
  act
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
/>
```
## Change
```
UPDATE: .state::text@5 "0" => "1"
```

# Update `click(".act")`
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="act"
>
  act
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  (1)
</div>
```
## Change
```
UPDATE: .log::text "" => "(1)"
```

# Update `click(".toggle")`
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="act"
>
  act
</button>
<div
  class="state"
>
  :1
</div>
<div
  class="log"
>
  (1)
</div>
```
## Change
```
UPDATE: .state::text "true" => ""
```

# Update `click(".act")`

# Update `click(".toggle")`
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="act"
>
  act
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  (1)
</div>
```
## Change
```
UPDATE: .state::text@0 "" => "true"
```

# Update `click(".act")`
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="act"
>
  act
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  (1)(1)
</div>
```
## Change
```
UPDATE: .log::text "(1)" => "(1)(1)"
```
