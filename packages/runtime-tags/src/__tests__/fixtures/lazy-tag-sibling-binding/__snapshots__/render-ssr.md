# Render
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="s"
>
  s:?
</button>
<button
  class="b"
>
  b:?
</button>
```

# Update `click(".s")`
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="s"
>
  s:true
</button>
<button
  class="b"
>
  b:?
</button>
```
## Change
```
UPDATE: .s::text@2 "?" => "true"
```

# Update `click(".b")`
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="s"
>
  s:true
</button>
<button
  class="b"
>
  b:true
</button>
```
## Change
```
UPDATE: .b::text@2 "?" => "true"
```
