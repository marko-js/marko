# Render
```html
<button>
  1
</button>
```

# Update `click("button")`

# Update `click("button")`

# Update
```html
<button>
  1
</button>
<span>
  Hello
</span>
<span>
  1
</span>
```
## Change
```
INSERT: button + span
INSERT: span:nth-of-type(1)::text("Hello")
INSERT: span:nth-of-type(1) + span
INSERT: span:nth-of-type(2)::text("1")
```

# Update `click("button")`
```html
<button>
  2
</button>
<span>
  Hello
</span>
<span>
  2
</span>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: span:nth-of-type(2)::text "1" => "2"
```
