# Render
```html
<button
  id="tags"
>
  0
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  0
</div>
```

# Update `click("#tags")`
```html
<button
  id="tags"
>
  1
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  1
</div>
```
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: div::text "0" => "1"
```

# Update `click("#tags")`
```html
<button
  id="tags"
>
  2
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  2
</div>
```
## Change
```
UPDATE: #tags::text "1" => "2"
UPDATE: div::text "1" => "2"
```

# Update `click("#toggle")`
```html
<button
  id="tags"
>
  2
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #toggle + div
```
