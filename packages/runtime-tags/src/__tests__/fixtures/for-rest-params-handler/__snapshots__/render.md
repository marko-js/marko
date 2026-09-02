# Render
```html
<button>
  a
</button>
<button>
  b
</button>
<span />
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  a
</button>
<button>
  b
</button>
<span>
  a,0
</span>
```
## Change
```
UPDATE: span::text "" => "a,0"
```
