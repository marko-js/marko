# Render `{"title":"a"}`
```html
<output
  data-kind="function"
>
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
<output
  data-kind="function"
>
  Ua
</output>
<button>
  toggle
</button>
```
## Change
```
UPDATE: output::text "la" => "Ua"
UPDATE: output[data-kind] "function" => "function"
```
