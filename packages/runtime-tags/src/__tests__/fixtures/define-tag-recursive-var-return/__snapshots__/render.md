# Render
```html
<button>
  0
</button>
<span>
  0
</span>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<span>
  1
</span>
<button>
  0
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "1"
UPDATE: span::text "0" => "1"
```
