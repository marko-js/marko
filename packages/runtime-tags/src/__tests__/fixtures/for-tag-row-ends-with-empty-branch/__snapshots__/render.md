# Render
```html
<p>
  0 x0 x
</p>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1 x1 x
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text@0 "0" => "1"
UPDATE: p::text@3 "0" => "1"
```
