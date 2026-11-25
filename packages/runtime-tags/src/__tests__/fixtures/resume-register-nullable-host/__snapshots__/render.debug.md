# Render
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

# Update
```js
document.querySelector(id).click();
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
document.querySelector(id).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<div
  class="card"
>
  <button
    id="inc"
  >
    1
  </button>
</div>
```
## Change
```
REMOVE: #inc
INSERT: .card
INSERT: #inc
UPDATE: #inc::text " " => "1"
```

# Update
```js
document.querySelector(id).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<div
  class="card"
>
  <button
    id="inc"
  >
    2
  </button>
</div>
```
## Change
```
UPDATE: #inc::text "1" => "2"
```

# Update
```js
document.querySelector(id).click();
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
REMOVE: div
INSERT: #inc
UPDATE: #inc::text " " => "2"
```

# Update
```js
document.querySelector(id).click();
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
  3
</button>
```
## Change
```
UPDATE: #inc::text "2" => "3"
```
