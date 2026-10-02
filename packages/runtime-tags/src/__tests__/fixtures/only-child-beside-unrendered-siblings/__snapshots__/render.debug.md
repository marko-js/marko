# Render
```html
<div>
  <b>
    shown
  </b>
</div>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div />
<button>
  toggle
</button>
```
## Change
```
REMOVE: div > b
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <b>
    shown
  </b>
</div>
<button>
  toggle
</button>
```
## Change
```
INSERT: div > b
UPDATE: div > b::text " " => "shown"
```
