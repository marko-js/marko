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
<section>
  shown content
</section>
```
## Change
```
INSERT: #toggle + section
INSERT: section::text("shown content")
```
