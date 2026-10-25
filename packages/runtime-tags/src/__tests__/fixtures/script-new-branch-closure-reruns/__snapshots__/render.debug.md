# Render
```html
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```
## Console
```
LOG "setup"
LOG "closure 1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```
## Console
```
LOG "closure 2"
```
