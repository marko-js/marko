# Render `{"show":true}`
```html
<span>
  1
</span>
<button>
  inc
</button>
<div>
  child
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  2
</span>
<button>
  inc
</button>
<div>
  child
</div>
```
## Change
```
UPDATE: span::text "1" => "2"
```
