# Render
```html
<button
  id="show"
>
  Show
</button>
<button
  id="inc"
>
  Inc
</button>
<span>
  0
</span>
```

# Update
```js
container.querySelector("#show").click();
```
```html
<button
  id="show"
>
  Show
</button>
<button
  id="inc"
>
  Inc
</button>
<div
  id="target"
/>
<span>
  0
</span>
```
## Change
```
INSERT: #inc + #target
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```html
<button
  id="show"
>
  Show
</button>
<button
  id="inc"
>
  Inc
</button>
<div
  id="target"
/>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
```

# Update
```js
container.querySelector("#inc").click();
```
```html
<button
  id="show"
>
  Show
</button>
<button
  id="inc"
>
  Inc
</button>
<div
  id="target"
/>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
```
