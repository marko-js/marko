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
INSERT: #toggle + .card
REMOVE: .card + #inc
INSERT: .card > #inc
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
INSERT: #toggle + #inc
REMOVE: #inc + div
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
