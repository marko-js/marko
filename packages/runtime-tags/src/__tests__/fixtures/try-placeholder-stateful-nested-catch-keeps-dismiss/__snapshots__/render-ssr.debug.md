# Render
```html
<span>
  placeholder
</span>
```

# Update
```html
<span>
  placeholder
</span>
```
## Change
```
INSERT: t > p::text("a")
```

# Update
```html
<b>
  nope
</b>
```
## Change
```
INSERT: p
REMOVE: p
REMOVE: span
INSERT: b
INSERT: b::text("nope")
```

# Update
```html
<b>
  nope
</b>
<p>
  after
</p>
```
## Change
```
INSERT: p
INSERT: p::text("after")
```
## Console
```
LOG "mounted" "placeholder"
LOG "destroyed" "placeholder"
```
