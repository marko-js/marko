# Render `{"show":true}`
```html
<button>
  add
</button>
<span>
  shown
</span>
<span>
  shown
</span>
```

# Update `{"show":false}`
```html
<button>
  add
</button>
```
## Change
```
REMOVE: button + span
REMOVE: button + span
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true}`
```html
<button>
  add
</button>
<span>
  shown
</span>
<span>
  shown
</span>
<span>
  shown
</span>
```
## Change
```
INSERT: button + span
INSERT: span:nth-of-type(1) + span
INSERT: span:nth-of-type(2) + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  add
</button>
<span>
  shown
</span>
<span>
  shown
</span>
<span>
  shown
</span>
<span>
  shown
</span>
```
## Change
```
INSERT: span:nth-of-type(3) + span
```
