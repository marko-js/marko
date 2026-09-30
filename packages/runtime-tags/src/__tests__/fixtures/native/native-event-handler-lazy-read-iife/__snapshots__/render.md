# Render
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="snap"
>
  snap
</button>
<div
  class="n"
>
  0
</div>
<div
  class="log"
/>
```

# Update `click(".bump")`
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="snap"
>
  snap
</button>
<div
  class="n"
>
  1
</div>
<div
  class="log"
/>
```
## Change
```
UPDATE: .n::text "0" => "1"
```

# Update `click(".snap")`
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="snap"
>
  snap
</button>
<div
  class="n"
>
  1
</div>
<div
  class="log"
>
  [1:1]
</div>
```
## Change
```
UPDATE: .log::text "" => "[1:1]"
```

# Update `click(".bump")`
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="snap"
>
  snap
</button>
<div
  class="n"
>
  2
</div>
<div
  class="log"
>
  [1:1]
</div>
```
## Change
```
UPDATE: .n::text "1" => "2"
```

# Update `click(".snap")`
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="snap"
>
  snap
</button>
<div
  class="n"
>
  2
</div>
<div
  class="log"
>
  [1:1][2:2]
</div>
```
## Change
```
UPDATE: .log::text "[1:1]" => "[1:1][2:2]"
```
