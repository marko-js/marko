# Render
```html
<button>
  update
</button>
<span>
  a
</span>
<span>
  b
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  update
</button>
<span>
  a
</span>
```
## Change
```
REMOVE: span + span
UPDATE: body[data-seen] "[{\"list\":[\"a\",\"b\"],\"show\":true,\"name\":\"first\"},1,\"b\"]" => "[{\"list\":[\"a\"],\"show\":true,\"name\":\"second\"},2,\"a\"]"
```
