# Render
```html
<div>
  <button>
    Test
  </button>
  <div />
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <div>
    hello
  </div>
</div>
```
## Change
```
REMOVE: div > button
INSERT: div > div::text("hello")
```
