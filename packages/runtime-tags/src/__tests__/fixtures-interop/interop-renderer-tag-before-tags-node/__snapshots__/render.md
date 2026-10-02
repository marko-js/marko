# Render
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
(document.getElementById("toggle")).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  0
</button>
```
## Change
```
INSERT: #toggle + #inc
UPDATE: #inc::text " " => "0"
```

# Update
```js
(document.getElementById("inc")).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  1
</button>
```
## Change
```
UPDATE: #inc::text "0" => "1"
```
