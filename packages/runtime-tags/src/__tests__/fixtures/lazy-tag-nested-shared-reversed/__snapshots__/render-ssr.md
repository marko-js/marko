# Render
```html
<button
  class="child"
>
  child:shared
</button>
<button
  class="grand"
>
  grand:shared
</button>
```

# Update `click(".child")`
```html
<button
  class="child"
>
  child:shared!
</button>
<button
  class="grand"
>
  grand:shared
</button>
```
## Change
```
UPDATE: .child::text@6 "shared" => "shared!"
```

# Update `click(".grand")`
```html
<button
  class="child"
>
  child:shared!
</button>
<button
  class="grand"
>
  grand:shared?
</button>
```
## Change
```
UPDATE: .grand::text@6 "shared" => "shared?"
```
