# Render
```html
<button>
  inc 1
</button>
```
## Console
```
LOG 1
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc 2
</button>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
```
## Console
```
LOG 2
```
