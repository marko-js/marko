# Render
```html
<button>
  x
</button>
<button>
  x
</button>
<span>
  none
</span>
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  x
</button>
<button>
  x
</button>
<span>
  b
</span>
```
## Change
```
UPDATE: span::text "none" => "b"
```
