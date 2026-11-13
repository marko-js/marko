# Render
```html
0
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
1
<button>
  inc
</button>
```
## Change
```
UPDATE: ::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
```
## Change
```
UPDATE: ::text "1" => "2"
REMOVE: ::text("2")
```
