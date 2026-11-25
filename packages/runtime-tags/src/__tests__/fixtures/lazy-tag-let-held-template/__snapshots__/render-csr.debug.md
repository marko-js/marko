# Render
```html
<button>
  Inc
</button>
```

# Update
```html
<button>
  Inc
</button>
<span>
  1
</span>
```
## Change
```
INSERT: span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
```
