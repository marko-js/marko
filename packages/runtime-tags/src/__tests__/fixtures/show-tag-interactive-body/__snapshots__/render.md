# Render
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update `click("#toggle")`
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 0
</button>
```
## Change
```
INSERT: #toggle + #inc
```

# Update `click("#inc")`
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 1
</button>
```
## Change
```
UPDATE: #inc::text@6 "0" => "1"
```

# Update `click("#inc")`
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 2
</button>
```
## Change
```
UPDATE: #inc::text@6 "1" => "2"
```

# Update `click("#toggle")`
```html
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #toggle + #inc
```

# Update `click("#toggle")`
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 2
</button>
```
## Change
```
INSERT: #toggle + #inc
```
