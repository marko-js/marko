# Render `{"value":1}`
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
<span
  id="child"
>
  0
</span>
```
## Change
```
INSERT: #inc + #child
INSERT: #child::text("0")
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
<span
  id="child"
>
  1
</span>
```
## Change
```
UPDATE: #child::text "0" => "1"
```
