# Render
```html
<button
  id="o"
>
  O
</button>
<button
  id="n"
>
  N
</button>
```

# Update `click("#n")`
```html
<button
  id="o"
>
  O
</button>
<button
  id="n"
>
  N
</button>
<div>
  n is 1
</div>
```
## Change
```
INSERT: #n + div
UPDATE: div::text@5 "" => "1"
```

# Update `click("#o")`
```html
<button
  id="o"
>
  O
</button>
<button
  id="n"
>
  N
</button>
```
## Change
```
REMOVE: #n + div
```

# Update `click("#n")`
