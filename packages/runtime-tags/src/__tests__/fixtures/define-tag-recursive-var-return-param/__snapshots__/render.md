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
document.querySelectorAll("button")[1].click();
```
```html
<button>
  0
</button>
<span>
  1
</span>
<button>
  1
</button>
```
## Change
```
UPDATE: button:nth-of-type(2)::text "0" => "1"
UPDATE: span::text "0" => "1"
```
