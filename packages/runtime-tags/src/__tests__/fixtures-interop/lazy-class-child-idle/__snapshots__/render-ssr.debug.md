# Render `{"value":1}`
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

# Update
## Console
```
LOG "loaded"
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
