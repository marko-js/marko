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
document.querySelector("#toggle").click();
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
document.querySelector("#inc").click();
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

# Update
```js
document.querySelector("#inc").click();
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
  2
</button>
```
## Change
```
UPDATE: #inc::text "1" => "2"
```
