# Render
```html
<button
  id="tags"
>
  Tags
</button>
<div
  id="display"
>
  hi
</div>
```

# Update `click("#tags")`
```html
<button
  id="tags"
>
  Tags
</button>
<div
  id="display"
>
  hi!
</div>
```
## Change
```
UPDATE: #display::text "hi" => "hi!"
```

# Update `click("#tags")`
```html
<button
  id="tags"
>
  Tags
</button>
<div
  id="display"
>
  hi!!
</div>
```
## Change
```
UPDATE: #display::text "hi!" => "hi!!"
```
