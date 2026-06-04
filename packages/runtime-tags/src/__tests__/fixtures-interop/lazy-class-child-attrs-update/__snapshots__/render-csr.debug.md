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
  2
</span>
```
## Change
```
INSERT: #inc + #child
INSERT: #child::text("2")
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
  3
</span>
```
## Change
```
UPDATE: #child::text "2" => "3"
```
