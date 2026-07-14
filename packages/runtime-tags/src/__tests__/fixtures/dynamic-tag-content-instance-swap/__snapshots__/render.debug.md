# Render
```html
<div>
  <span>
    alpha
  </span>
</div>
<button>
  swap
</button>
```

# Update
```js
container.querySelector(`button`).click();
```
```html
<div>
  <span>
    beta
  </span>
</div>
<button>
  swap
</button>
```
## Change
```
INSERT: div > span
REMOVE: div > span + span
UPDATE: div > span::text " " => "beta"
```

# Update
```js
container.querySelector(`button`).click();
```
```html
<div>
  <span>
    alpha
  </span>
</div>
<button>
  swap
</button>
```
## Change
```
INSERT: div > span
REMOVE: div > span + span
UPDATE: div > span::text " " => "alpha"
```
