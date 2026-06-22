# Render
```html
Got: SYNC
<button>
  toggle
</button>
```

# Update
```js
container.querySelector("button").click();
```

# Update
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: ::text("Got: ")
REMOVE: ::text("SYNC")
```

# Update
```html
Got: ASYNC
<button>
  toggle
</button>
```
## Change
```
INSERT: ::text("Got: "), ::text("ASYNC")
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
