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
INSERT: ::text@0 + ::text("ASYNC")
INSERT: ::text@5 + button
INSERT: button::text("toggle")
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
UPDATE: ::text@5 "ASYNC" => "SYNC"
```
