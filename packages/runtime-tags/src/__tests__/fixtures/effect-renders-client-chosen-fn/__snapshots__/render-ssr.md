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
UPDATE: output::text "la" => "Ua"
```
## Console
```
LOG "run" "Ua"
```
