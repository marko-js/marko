# Render
```html
<div>
  3
</div>
<button>
  before
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  3
</div>
<button>
  after
</button>
```
## Change
```
REMOVE: button::text("before")
INSERT: button::text("after")
```
