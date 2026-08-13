# Render `{"items":["a","boom","c"]}`
```html
<span>
  loading
</span>
```

# Update
```html
<span>
  loading
</span>
```
## Change
```
INSERT: t > ul > li::text("a")
```

# Update
```html
<em>
  boom
</em>
```
## Change
```
INSERT: em::text("boom")
REMOVE: span
INSERT: ul
REMOVE: ul
INSERT: em
```
