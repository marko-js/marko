# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<div>
  <button
    id="inc"
  >
    count 0
  </button>
</div>
```

# Update
```js
container.querySelector(`#${id}`).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<div>
  <button
    id="inc"
  >
    count 1
  </button>
</div>
```
## Change
```
UPDATE: #inc::text@6 "0" => "1"
```

# Update
```js
container.querySelector(`#${id}`).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<div />
```
## Change
```
REMOVE: div > #inc
```

# Update
```js
container.querySelector(`#${id}`).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<div>
  <button
    id="inc"
  >
    count 1
  </button>
</div>
```
## Change
```
INSERT: div > #inc
```

# Update
```js
container.querySelector(`#${id}`).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<div>
  <button
    id="inc"
  >
    count 2
  </button>
</div>
```
## Change
```
UPDATE: #inc::text@6 "1" => "2"
```
