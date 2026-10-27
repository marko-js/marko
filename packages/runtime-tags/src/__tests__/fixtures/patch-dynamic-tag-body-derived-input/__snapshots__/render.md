# Render `{"tag":"div","a":"x"}`
```html
<button>
  0
</button>
<div>
  X
</div>
```

# Update `{"tag":"section","a":"y"}`
```html
<button>
  0
</button>
<section>
  Y
</section>
```
## Change
```
INSERT: button + section
REMOVE: section + div
UPDATE: section::text " " => "Y"
```
