# Render

# Update
```html
<button>
  a
</button>
```
## Change
```
INSERT: button
```

# Update
```html
<button>
  a
</button>
<button>
  b
</button>
```
## Change
```
INSERT: button:nth-of-type(2)
```

# Update
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
## Change
```
INSERT: button:nth-of-type(3)
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
