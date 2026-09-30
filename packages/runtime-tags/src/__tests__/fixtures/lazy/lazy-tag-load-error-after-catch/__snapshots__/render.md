# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="load"
>
  load
</button>
```

# Update `click("#toggle")`

# Update
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="load"
>
  load
</button>
loading
```
## Change
```
INSERT: #load + ::text("loading")
```

# Update
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="load"
>
  load
</button>
caught: rejected
```
## Change
```
INSERT: #load + :is(::text("caught: "), ::text("rejected"))
REMOVE: ::text@8 + ::text("loading")
UPDATE: ::text@8 "" => "rejected"
```

# Update `click("#load")`
