# Render
```html
<span>
  x:depth,label
</span>
<span>
  x:depth,label
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
  x:depth,label
</span>
<span>
  x:depth,label
</span>
<span>
  x:depth,label
</span>
<button>
  deeper
</button>
```
## Change
```
INSERT: span
UPDATE: span:nth-of-type(1)::text@2 "" => "depth,label"
UPDATE: span:nth-of-type(1)::text@0 "" => "x"
```
