# Render `{"show":false}`
```html
<button
  class="label"
>
  label
</button>
```

# Update `{"show":true}`
```html
<button
  class="label"
>
  label
</button>
<button>
  v:a
</button>
```
## Change
```
INSERT: .label + button
UPDATE: button:nth-of-type(2)::text " " => "v:a"
```
