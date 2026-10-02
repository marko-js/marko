# Render `{"a":false,"dyn":"div"}`
```html
<button>
  0
</button>
<div
  count="0"
>
  y
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<div
  count="1"
>
  y
</div>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: div[count] "0" => "1"
```
