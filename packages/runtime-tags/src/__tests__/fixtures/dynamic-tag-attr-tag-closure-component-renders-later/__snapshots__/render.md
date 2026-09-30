# Render
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update `click("#toggle")`
```html
<button
  id="toggle"
>
  toggle
</button>
text Hello
```
## Change
```
INSERT: #toggle + :is(::text("text "), ::text("Hello"))
UPDATE: ::text@5 "" => "Hello"
```
