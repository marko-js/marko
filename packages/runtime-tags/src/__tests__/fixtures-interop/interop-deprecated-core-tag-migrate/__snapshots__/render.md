# Render `{"greeting":"hi"}`
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="out"
>
  hi 0
</div>
```

# Update `click("#inc")`
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="out"
>
  hi 1
</div>
```
## Change
```
REMOVE: #out::text("hi 0")
INSERT: #out::text("hi 1")
```
