# Render
```html
<div>
  <span>
    A1
  </span>
  <b>
    B2
  </b>
  <span>
    A3
  </span>
</div>
<button>
  rot
</button>
```

# Update
```js
c.querySelector("button").click();
```
```html
<div>
  <span>
    A3
  </span>
  <span>
    A1
  </span>
  <b>
    B2
  </b>
</div>
<button>
  rot
</button>
```
## Change
```
REMOVE: div > b + span
INSERT: div > span
```

# Update
```js
c.querySelector("button").click();
```
```html
<div>
  <b>
    B2
  </b>
  <span>
    A3
  </span>
  <span>
    A1
  </span>
</div>
<button>
  rot
</button>
```
## Change
```
REMOVE: div > span:nth-of-type(2) + b
INSERT: div > b
```
