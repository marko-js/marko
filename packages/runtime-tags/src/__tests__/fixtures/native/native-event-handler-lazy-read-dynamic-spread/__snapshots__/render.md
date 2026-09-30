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
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
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
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
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

# Update `click(".a")`
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
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  a(1)
</div>
```
## Change
```
UPDATE: .log::text "" => "a(1)"
```

# Update `click(".b")`
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
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  a(1)b(1)
</div>
```
## Change
```
UPDATE: .log::text "a(1)" => "a(1)b(1)"
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
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  :1
</div>
<div
  class="log"
>
  a(1)b(1)
</div>
```
## Change
```
UPDATE: .state::text "true" => ""
```

# Update `click(".a")`

# Update `click(".b")`

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
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  a(1)b(1)
</div>
```
## Change
```
UPDATE: .state::text@0 "" => "true"
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
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:2
</div>
<div
  class="log"
>
  a(1)b(1)
</div>
```
## Change
```
UPDATE: .state::text@5 "1" => "2"
```

# Update `click(".a")`
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
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:2
</div>
<div
  class="log"
>
  a(1)b(1)a(2)
</div>
```
## Change
```
UPDATE: .log::text "a(1)b(1)" => "a(1)b(1)a(2)"
```

# Update `click(".b")`
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
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:2
</div>
<div
  class="log"
>
  a(1)b(1)a(2)b(2)
</div>
```
## Change
```
UPDATE: .log::text "a(1)b(1)a(2)" => "a(1)b(1)a(2)b(2)"
```
