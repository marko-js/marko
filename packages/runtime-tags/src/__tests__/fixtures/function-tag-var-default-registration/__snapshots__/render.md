# Render
```html
<button>
  before
</button>
```

# Update
```js
container.querySelector("button").click();
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
