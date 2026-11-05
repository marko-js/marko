# Render
```html
<div>
  0
</div>
<div>
  x0
</div>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  1
</div>
<div>
  x1
</div>
<button>
  inc
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "0" => "1"
UPDATE: div:nth-of-type(2)::text@1 "0" => "1"
```
