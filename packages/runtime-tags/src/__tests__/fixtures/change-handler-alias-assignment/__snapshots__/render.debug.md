# Render
```html
<button>
  Before
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  After
</button>
```
## Change
```
REMOVE: button::text("Before")
INSERT: button::text("After")
```
