# Render
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="bump"
>
  bump
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  value 1
</div>
```

# Update `click("#toggle")`
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="bump"
>
  bump
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  value 2
</div>
```
## Change
```
INSERT: #toggle + div
REMOVE: div + div
UPDATE: div::text@6 "" => "2"
```

# Update `click(".bump", 1)`
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="bump"
>
  bump
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  value 3
</div>
```
## Change
```
UPDATE: div::text@6 "2" => "3"
```

# Update `click("#toggle")`
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="bump"
>
  bump
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  value 1
</div>
```
## Change
```
INSERT: #toggle + div
REMOVE: div + div
UPDATE: div::text@6 "" => "1"
```
