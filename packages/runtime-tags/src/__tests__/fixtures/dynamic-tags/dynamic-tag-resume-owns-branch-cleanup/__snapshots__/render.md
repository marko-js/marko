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
  dyn destroyed
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
<div />
```
## Change
```
INSERT: #s + div
REMOVE: #ref::text("init")
INSERT: #ref::text("dyn destroyed")
```

# Update `click("#o")`
```html
<div
  id="ref"
>
  dyn destroyed
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
REMOVE: #s + div
REMOVE: #ref::text("dyn destroyed")
INSERT: #ref::text("dyn destroyed")
```
