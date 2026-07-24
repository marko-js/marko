# Render
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
<div
  id="visible"
>
  visible 0
</div>
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
<div
  id="visible"
>
  visible 0
</div>
<div
  id="awaited"
>
  awaited 0
</div>
```
## Change
```
INSERT: #visible + #awaited
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
<div
  id="visible"
>
  visible 1
</div>
<div
  id="awaited"
>
  awaited 0
</div>
```
## Change
```
UPDATE: #visible::text@8 "0" => "1"
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
<div
  id="visible"
>
  visible 1
</div>
```
## Change
```
REMOVE: #visible + #awaited
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
<div
  id="visible"
>
  visible 1
</div>
<div
  id="awaited"
>
  awaited 1
</div>
```
## Change
```
INSERT: #visible + #awaited
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
<div
  id="visible"
>
  visible 1
</div>
<div
  id="hidden"
>
  hidden 1
</div>
<div
  id="awaited"
>
  awaited 1
</div>
```
## Change
```
INSERT: #visible + #hidden
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
<div
  id="visible"
>
  visible 2
</div>
<div
  id="hidden"
>
  hidden 2
</div>
<div
  id="awaited"
>
  awaited 1
</div>
```
## Change
```
UPDATE: #visible::text@8 "1" => "2"
UPDATE: #hidden::text@7 "1" => "2"
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
<div
  id="visible"
>
  visible 2
</div>
<div
  id="hidden"
>
  hidden 2
</div>
```
## Change
```
REMOVE: #hidden + #awaited
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
<div
  id="visible"
>
  visible 2
</div>
<div
  id="hidden"
>
  hidden 2
</div>
<div
  id="awaited"
>
  awaited 2
</div>
```
## Change
```
INSERT: #hidden + #awaited
```
