# Render
```html
<button>
  toggle
</button>
<section>
  shown
</section>
```

# Update `click("button")`
```html
<button>
  toggle
</button>
<section />
```
## Change
```
REMOVE: section::text("shown")
```

# Update `click("button")`
```html
<button>
  toggle
</button>
<section>
  shown
</section>
```
## Change
```
INSERT: section::text("shown")
```
