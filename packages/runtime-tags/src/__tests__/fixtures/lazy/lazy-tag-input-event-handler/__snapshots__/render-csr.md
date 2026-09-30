# Render
```html
<button
  class="main"
>
  main:0
</button>
```

# Update
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="child"
>
  child:?
</button>
```
## Change
```
INSERT: .main + .child
```

# Update `click(".child")`
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="child"
>
  child:true
</button>
```
## Change
```
UPDATE: .child::text@6 "?" => "true"
```
