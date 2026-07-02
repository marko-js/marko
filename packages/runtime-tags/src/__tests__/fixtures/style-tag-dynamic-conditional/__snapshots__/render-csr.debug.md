# Render `{"show":true,"color":"red"}`
```html
<div
  class="box"
>
  Hi
</div>
<span>
  after
</span>
```

# Update `{"show":false,"color":"red"}`
```html
<span>
  after
</span>
```
## Change
```
REMOVE: div
```

# Update `{"show":true,"color":"blue"}`
```html
<div
  class="box"
>
  Hi
</div>
<span>
  after
</span>
```
## Change
```
INSERT: .box
```
