# Render
```html
<button>
  0 0
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1 1
</button>
```
## Change
```
UPDATE: button::text@0 "0" => "1"
UPDATE: button::text@2 "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2 2
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "2"
UPDATE: button::text@2 "1" => "2"
```
