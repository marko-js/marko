# Render
```html
<span>
  x
</span>
<span>
  a
</span>
<button>
  a
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
  aa
</span>
<button>
  aa
</button>
```
## Change
```
UPDATE: button::text "a" => "aa"
UPDATE: span:nth-of-type(2)::text "a" => "aa"
```
