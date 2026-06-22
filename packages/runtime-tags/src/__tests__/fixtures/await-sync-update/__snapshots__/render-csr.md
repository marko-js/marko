# Render
```html
Got: v0
<button>
  inc
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
Got: v1
<button>
  inc
</button>
```
## Change
```
UPDATE: ::text@5 "v0" => "v1"
```

# Update
```js
container.querySelector("button").click();
```
```html
Got: v2
<button>
  inc
</button>
```
## Change
```
UPDATE: ::text@5 "v1" => "v2"
```
