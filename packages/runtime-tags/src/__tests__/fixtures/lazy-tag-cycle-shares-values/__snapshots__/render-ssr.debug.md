# Render
```html
<button>
  a
</button>
<button>
  b
</button>
<button>
  a
</button>
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
## Console
```
LOG "a" "a2" undefined
LOG "b" "b1" "{\"name\":\"a2\"}"
LOG "a" "a0" "{\"name\":\"b1\"}"
```
