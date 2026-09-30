# Render
```html
<button
  id="class"
>
  toggle
</button>
<button
  id="tags"
>
  0
</button>
```

# Update `click("#tags")`
```html
<button
  id="class"
>
  toggle
</button>
<button
  id="tags"
>
  1
</button>
```
## Change
```
UPDATE: #tags::text "0" => "1"
```

# Update `click("#class")`
```html
<button
  id="class"
>
  toggle
</button>
```
## Change
```
REMOVE: #class + #tags
```

# Update `click("#class")`
```html
<button
  id="class"
>
  toggle
</button>
<button
  id="tags"
>
  0
</button>
```
## Change
```
INSERT: #class + #tags
```
