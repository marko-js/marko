# Render
```html
<div
  id="ref"
>
  init
</div>
<button
  id="o"
>
  O
</button>
<button
  id="s"
>
  S
</button>
```

# Update `click("#s")`
```html
<div
  id="ref"
>
  init
</div>
<button
  id="o"
>
  O
</button>
<button
  id="s"
>
  S
</button>
<p>
  inner
</p>
```
## Change
```
INSERT: #s + p
```

# Update `click("#o")`
```html
<div
  id="ref"
>
  inner destroyed
</div>
<button
  id="o"
>
  O
</button>
<button
  id="s"
>
  S
</button>
```
## Change
```
REMOVE: #s + p
REMOVE: #ref::text("init")
INSERT: #ref::text("inner destroyed")
```
