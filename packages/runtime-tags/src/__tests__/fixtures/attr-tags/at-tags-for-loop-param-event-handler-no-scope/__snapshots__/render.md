# Render
```html
<button>
  Click
</button>
<button>
  Click
</button>
```

# Update `click("button")`
```html
<button>
  a
</button>
<button>
  Click
</button>
```
## Change
```
REMOVE: button:nth-of-type(1)::text("Click")
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
```
## Change
```
REMOVE: button:nth-of-type(2)::text("Click")
INSERT: button:nth-of-type(2)::text("b")
```
