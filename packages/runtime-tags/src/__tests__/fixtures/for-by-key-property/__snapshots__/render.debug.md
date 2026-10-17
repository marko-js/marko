# Render
```html
<button>
  ab:2
  <span>
    2
  </span>
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  ab:2
  <span>
    2
  </span>
</button>
<button>
  cde:3
  <span>
    3
  </span>
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + button
```
