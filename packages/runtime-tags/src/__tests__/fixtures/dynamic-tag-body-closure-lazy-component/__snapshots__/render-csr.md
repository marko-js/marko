# Render
```html
<button
  id="inc"
>
  inc
</button>
```

# Update `click("#inc")`

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: #inc + #toggle
```

# Update `click("#toggle")`
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
depth 1
```
## Change
```
INSERT: #toggle + :is(::text("depth "), ::text("1"))
UPDATE: ::text@6 "" => "1"
```
