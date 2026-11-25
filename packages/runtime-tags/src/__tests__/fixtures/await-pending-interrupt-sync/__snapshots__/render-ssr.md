# Render

# Update
```html
Got: ASYNC
<button>
  toggle
</button>
```
## Change
```
INSERT: ::text("Got: ")
INSERT: ::text("ASYNC")
INSERT: button
INSERT: button::text("toggle")
```

# Update
```js
document.querySelector("button").click();
```
```html
Got: SYNC
<button>
  toggle
</button>
```
## Change
```
UPDATE: ::text@5 "ASYNC" => "SYNC"
```
