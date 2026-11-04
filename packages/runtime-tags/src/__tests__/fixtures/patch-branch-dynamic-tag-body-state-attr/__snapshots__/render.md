# Render `{"show":false,"tag":"p"}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"tag":"p"}`
```html
<p>
  <span
    data-n="0"
  >
    x
  </span>
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p > span[data-n] null => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  <span
    data-n="1"
  >
    x
  </span>
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p > span[data-n] "0" => "1"
```

# Update `{"show":true,"tag":"div"}`
```html
<div>
  <span
    data-n="1"
  >
    x
  </span>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: div
REMOVE: div + p
UPDATE: div > span[data-n] null => "1"
```
