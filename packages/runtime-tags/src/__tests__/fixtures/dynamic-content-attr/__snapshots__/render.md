# Render
```html
<button>
  0 3
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1 3
</button>
```
## Change
```
UPDATE: button::text@0 "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2 3
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "2"
```
