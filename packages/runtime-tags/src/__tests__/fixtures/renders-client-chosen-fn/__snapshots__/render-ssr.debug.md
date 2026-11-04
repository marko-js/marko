# Render `{"title":"a"}`
```html
<output>
  la
</output>
<button>
  toggle
</button>
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
