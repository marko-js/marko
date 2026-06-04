# Render
```html
<button
  id="inc"
>
  Inc
</button>
```

# Update
```html
<button
  id="inc"
>
  Inc
</button>
<span>
   
</span>
```
## Change
```
INSERT: #inc + span
```

# Update
```html
<button
  id="inc"
>
  Inc
</button>
<span>
  0
</span>
```
## Change
```
UPDATE: span::text " " => "0"
```

# Update
```js
container.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  Inc
</button>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
```
