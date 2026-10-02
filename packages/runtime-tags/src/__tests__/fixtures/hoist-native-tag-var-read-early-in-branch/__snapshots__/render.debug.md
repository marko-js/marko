# Render `{"show":true}`
```html
<button>
  focus
</button>
<div />
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  focus
</button>
<div>
  clicked
</div>
```
## Change
```
INSERT: div::text("clicked")
```
