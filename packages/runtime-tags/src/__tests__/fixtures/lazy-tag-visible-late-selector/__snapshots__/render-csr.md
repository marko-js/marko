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
   
</span>
```
## Change
```
INSERT: #target + span
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
UPDATE: span::text " " => "1"
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
