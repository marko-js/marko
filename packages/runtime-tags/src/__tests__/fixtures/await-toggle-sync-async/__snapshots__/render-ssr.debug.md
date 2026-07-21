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
Got: ASYNC
<button>
  toggle
</button>
```
## Change
```
UPDATE: ::text@5 "SYNC" => "ASYNC"
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
