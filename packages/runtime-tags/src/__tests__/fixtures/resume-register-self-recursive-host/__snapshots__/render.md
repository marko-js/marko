# Render `{"depth":1}`
```html
<button
  id="inc"
>
  0
</button>
<button
  id="inc"
>
  0
</button>
self recursive host: registered
```

# Update `click("#inc")`
```html
<button
  id="inc"
>
  1
</button>
<button
  id="inc"
>
  0
</button>
self recursive host: registered
```
## Change
```
UPDATE: #inc::text "0" => "1"
```
