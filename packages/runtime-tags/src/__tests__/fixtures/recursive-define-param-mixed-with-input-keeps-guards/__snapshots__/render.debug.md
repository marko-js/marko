# Render
```html
<span>
  0
</span>
<span>
  1
</span>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  0
</span>
<span>
  2
</span>
<button>
  inc
</button>
```
## Change
```
UPDATE: span:nth-of-type(2)::text "1" => "2"
```
