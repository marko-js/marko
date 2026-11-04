# Render `{"name":"a","$global":{"suffix":"x","serializedGlobals":["suffix"]}}`
```html
<button>
  0
</button>
<p>
  ax
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  ax
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```
