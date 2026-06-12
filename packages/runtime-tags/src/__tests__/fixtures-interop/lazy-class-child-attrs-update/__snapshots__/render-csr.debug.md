# Render
```html
<button
  id="inc"
>
  Inc
</button>
```

# Update
```js
container.querySelector("#inc").click();
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
  1
</span>
```
## Change
```
INSERT: #inc + #child
INSERT: #child::text("1")
```
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
  2
</span>
```
## Change
```
UPDATE: #child::text "1" => "2"
```
