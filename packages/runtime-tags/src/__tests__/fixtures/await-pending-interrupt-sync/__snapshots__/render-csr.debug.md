# Render
```html
<button>
  toggle
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
Got: SYNC
<button>
  toggle
</button>
```
## Change
```
INSERT: ::text("Got: "), ::text("SYNC")
UPDATE: ::text@5 "" => "SYNC"
```
