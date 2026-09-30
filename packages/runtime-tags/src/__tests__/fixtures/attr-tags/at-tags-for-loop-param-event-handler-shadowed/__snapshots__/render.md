# Render
```html
<button>
  a
</button>
<button>
  b
</button>
<div>
  outer
</div>
```

# Update `click("button")`
```html
<button>
  a
</button>
<button>
  b
</button>
<div>
  outer
</div>
```
## Change
```
REMOVE: button:nth-of-type(1)::text("a")
INSERT: button:nth-of-type(1)::text("a")
```

# Update `click("button", 1)`
```html
<button>
  a
</button>
<button>
  b
</button>
<div>
  outer
</div>
```
## Change
```
REMOVE: button:nth-of-type(2)::text("b")
INSERT: button:nth-of-type(2)::text("b")
```
