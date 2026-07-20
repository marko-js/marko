# Render
```html
<button>
  before
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  after
</button>
```
## Change
```
REMOVE: button::text("before")
INSERT: button::text("after")
```
