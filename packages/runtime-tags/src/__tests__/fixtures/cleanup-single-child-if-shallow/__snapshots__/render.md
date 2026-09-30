# Render
```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
<div>
  child
</div>
```

# Update `click("button")`
```html
<button>
  Toggle
</button>
<div>
  destroyed
</div>
```
## Change
```
REMOVE: div + div
REMOVE: div::text("mounted")
INSERT: div::text("destroyed")
```

# Update `click("button")`
```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
<div>
  child
</div>
```
## Change
```
INSERT: div:nth-of-type(1) + div
REMOVE: div:nth-of-type(1)::text("destroyed")
INSERT: div:nth-of-type(1)::text("mounted")
```

# Update `click("button")`
```html
<button>
  Toggle
</button>
<div>
  destroyed
</div>
```
## Change
```
REMOVE: div + div
REMOVE: div::text("mounted")
INSERT: div::text("destroyed")
```
