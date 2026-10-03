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
INSERT: b::text("nope")
REMOVE: span
INSERT: p
REMOVE: p
INSERT: b
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
INSERT: b + p
INSERT: p::text("after")
```
## Console
```
LOG "mounted" "placeholder"
LOG "destroyed" "placeholder"
```
