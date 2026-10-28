# Render `{"title":"a","upper":true}`
```html
<output>
  Ua0
</output>
<button>
  inc
</button>
```
## Console
```
LOG "run" "Ua0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  Ua1
</output>
<button>
  inc
</button>
```
## Change
```
REMOVE: output::text("Ua0")
INSERT: output::text("Ua1")
```
## Console
```
LOG "run" "Ua1"
```
