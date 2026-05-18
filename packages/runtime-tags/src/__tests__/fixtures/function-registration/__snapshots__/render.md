# Render
```html
<div>
  3
</div>
<div>
  4
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
<div>
  4
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
