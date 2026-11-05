# Render
```html
<div>
  <p>
    x0
  </p>
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
  <p>
    x1
  </p>
</div>
<button>
  inc
</button>
```
## Change
```
UPDATE: div > p::text@1 "0" => "1"
```
