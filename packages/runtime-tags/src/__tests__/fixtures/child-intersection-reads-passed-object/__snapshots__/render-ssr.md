# Render `{"show":true,"x":"a"}`
```html
<span>
  <i>
    0:{"value":"a"}
  </i>
</span>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  <i>
    1:{"value":"a"}
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "0:{\"value\":\"a\"}" => "1:{\"value\":\"a\"}"
```
