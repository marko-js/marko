# Render
```html
<span>
  x
</span>
<span>
  x
</span>
<button>
  deeper
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  x
</span>
<span>
  x
</span>
<span>
  x
</span>
<button>
  deeper
</button>
```
## Change
```
INSERT: span
UPDATE: span:nth-of-type(1)::text " " => "x"
```
