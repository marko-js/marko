# Render `{"a":"A","x":true}`
```html
<span>
  A
</span>
<p>
  A
</p>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  A
</span>
<p>
  A
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```
