# Render
```html
<button
  id="bump"
>
  0
</button>
<button
  data-count="0"
  id="class-api"
>
  click
</button>
<button
  data-count="0"
  id="class-api"
>
  click
</button>
```

# Update `click("#bump")`
```html
<button
  id="bump"
>
  1
</button>
<button
  data-count="0"
  id="class-api"
>
  click
</button>
<button
  data-count="0"
  id="class-api"
>
  click
</button>
```
## Change
```
UPDATE: #bump::text "0" => "1"
```
