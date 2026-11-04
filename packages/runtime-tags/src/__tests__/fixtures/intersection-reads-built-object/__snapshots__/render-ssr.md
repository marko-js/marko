# Render `{"x":"a"}`
```html
<p>
  0:{"value":"a"}
</p>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1:{"value":"a"}
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0:{\"value\":\"a\"}" => "1:{\"value\":\"a\"}"
```
