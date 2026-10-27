# Render `{"title":"a"}`
```html
<output>
  la
</output>
<button>
  toggle
</button>
```
## Console
```
LOG "run" "la"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  Ua
</output>
<button>
  toggle
</button>
```
## Change
```
REMOVE: output::text("la")
INSERT: output::text("Ua")
```
## Console
```
LOG "run" "Ua"
```
