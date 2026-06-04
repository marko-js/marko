# Render `{"value":1}`

# Update
```html
<button>
  : 
</button>
```
## Change
```
INSERT: button
```

# Update
```html
<button>
  x: 1
</button>
```
## Change
```
UPDATE: button::text@0 "" => "x"
UPDATE: button::text@3 "" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  x: 2
</button>
```
## Change
```
UPDATE: button::text@3 "1" => "2"
```
