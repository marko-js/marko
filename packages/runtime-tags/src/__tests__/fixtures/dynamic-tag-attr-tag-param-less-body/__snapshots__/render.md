# Render
```html
<button>
  0
</button>
<em>
  hi 0
</em>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<em>
  hi 1
</em>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: em::text@3 "0" => "1"
```
