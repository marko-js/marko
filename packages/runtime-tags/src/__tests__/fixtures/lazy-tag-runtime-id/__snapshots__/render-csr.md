# Render

# Update
```html
<button>
  count: 1
</button>
```
## Change
```
INSERT: button
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  count: 2
</button>
```
## Change
```
UPDATE: button::text@7 "1" => "2"
```
