# Render `{"more":false,"label":"a"}`
```html
<button>
  swap
</button>
```

# Update `{"more":true,"label":"b"}`
```html
<button>
  swap
</button>
<p>
  &lt;b&gt;
</p>
```
## Change
```
INSERT: button + p
```

# Update `{"more":true,"label":"c"}`
```html
<button>
  swap
</button>
<p>
  &lt;c&gt;
</p>
```
## Change
```
UPDATE: p::text "<b>" => "<c>"
```
