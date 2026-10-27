# Render `{"title":"a"}`
```html
<p>
  la
</p>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  Ua
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "la" => "Ua"
```
