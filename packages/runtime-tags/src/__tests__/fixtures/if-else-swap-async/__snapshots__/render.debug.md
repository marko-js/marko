# Render
```html
<button>
  flip
</button>
<div>
  x 
  <span>
    B
  </span>
   y
</div>
```

# Update
```html
<button>
  flip
</button>
<div>
  x 
  <span>
    B
  </span>
   y
</div>
ready
```
## Change
```
INSERT: div + ::text("ready")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  flip
</button>
<div>
  x 
  <span>
    A
  </span>
   y
</div>
ready
```
## Change
```
REMOVE: div > span
INSERT: div::text@0 + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  flip
</button>
<div>
  x 
  <span>
    B
  </span>
   y
</div>
ready
```
## Change
```
REMOVE: div > span
INSERT: div::text@0 + span
```
