# Render
```html
<div
  id="class-parent"
>
  0
</div>
<button
  id="class-child"
>
  Change
</button>
```

# Update `click("#class-child")`
```html
<div
  id="class-parent"
>
  1
</div>
<button
  id="class-child"
>
  Change
</button>
```
## Change
```
UPDATE: #class-parent::text "0" => "1"
```

# Update `click("#class-child")`
```html
<div
  id="class-parent"
>
  2
</div>
<button
  id="class-child"
>
  Change
</button>
```
## Change
```
UPDATE: #class-parent::text "1" => "2"
```
