# Render
```html
<button
  id="direct"
>
  0
</button>
<button
  id="const"
>
  0
</button>
<button
  id="assign"
>
  1 1
</button>
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="direct"
>
  1
</button>
<button
  id="const"
>
  1
</button>
<button
  id="assign"
>
  1 1
</button>
```
## Change
```
UPDATE: #direct::text "0" => "1"
UPDATE: #const::text "0" => "1"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="direct"
>
  2
</button>
<button
  id="const"
>
  2
</button>
<button
  id="assign"
>
  1 1
</button>
```
## Change
```
UPDATE: #direct::text "1" => "2"
UPDATE: #const::text "1" => "2"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
## Console
```
LOG "direct" 2
LOG "const" 3
```
