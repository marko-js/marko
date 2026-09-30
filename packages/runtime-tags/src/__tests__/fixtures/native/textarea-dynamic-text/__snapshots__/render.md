# Render
```html
<textarea>
  before
</textarea>
<button>
  update
</button>
```

# Update `click("button")`
```html
<textarea
  default-value="after"
>
  before
</textarea>
<button>
  update
</button>
```
## Change
```
REMOVE: textarea::text("before")
INSERT: textarea::text("after")
```
