# Render
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="even"
>
  even 0
</div>
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="even"
>
  even 0
</div>
<div
  id="awaited"
>
  awaited 0
</div>
```
## Change
```
INSERT: #even + #awaited
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
<div
  id="odd"
>
  odd 1
</div>
<div
  id="awaited"
>
  awaited 0
</div>
```
## Change
```
INSERT: #inc + #odd
REMOVE: #odd + #even
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="odd"
>
  odd 1
</div>
```
## Change
```
REMOVE: #odd + #awaited
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="odd"
>
  odd 1
</div>
<div
  id="awaited"
>
  awaited 1
</div>
```
## Change
```
INSERT: #odd + #awaited
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
<div
  id="even"
>
  even 2
</div>
<div
  id="awaited"
>
  awaited 1
</div>
```
## Change
```
INSERT: #inc + #even
REMOVE: #even + #odd
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="even"
>
  even 2
</div>
```
## Change
```
REMOVE: #even + #awaited
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<div
  id="even"
>
  even 2
</div>
<div
  id="awaited"
>
  awaited 2
</div>
```
## Change
```
INSERT: #even + #awaited
```
