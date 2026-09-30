# Render
```html
<button
  id="open"
>
  open
</button>
```

# Update `click("#open")`
```html
<button
  id="open"
>
  open
</button>
count 1
```
## Change
```
INSERT: #open + :is(::text("count "), ::text("1"))
UPDATE: ::text@6 "" => "1"
```
