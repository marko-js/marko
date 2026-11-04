# Render `{"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<button>
  child
</button>
<output>
  -
</output>
```

# Update `{"$global":{"brand":"b","serializedGlobals":["brand"]}}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  child
</button>
<output>
  b
</output>
```
## Change
```
UPDATE: output::text "-" => "b"
```
