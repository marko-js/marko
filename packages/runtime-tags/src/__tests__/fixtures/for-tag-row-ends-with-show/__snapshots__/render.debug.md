# Render `{"show":true}`
```html
<p>
  0102
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
  1112
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text@0 "0" => "1"
UPDATE: p::text@2 "0" => "1"
```
