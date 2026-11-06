# Render `{"flag":false,"items":[{"id":1},{"id":2}],"sel":1}`
```html
<span
  class="on"
>
  1
</span>
<span>
  2
</span>
```

# Update `{"flag":false,"items":[{"id":1}],"sel":2}`
```html
<span
  class=""
>
  1
</span>
```
## Change
```
REMOVE: span + span
UPDATE: span[class] "on" => ""
```
