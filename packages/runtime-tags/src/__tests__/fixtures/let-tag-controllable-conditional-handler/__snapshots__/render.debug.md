# Render `{"on":false}`
```html
<button>
  1|1
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2|1
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "2"
```
## Console
```
LOG 2
```
