# Render `{"show":true,"text":"a","decor":{}}`
```html
<p>
  a!
</p>
```

# Update `{"show":true,"text":"b","decor":{}}`
```html
<p>
  b!
</p>
```
## Change
```
INSERT: p::text("b!")
REMOVE: p::text + ::text("a!")
```
