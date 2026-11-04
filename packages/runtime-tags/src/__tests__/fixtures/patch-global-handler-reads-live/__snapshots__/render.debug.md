# Render `{"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<button>
  read
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
  read
</button>
<output>
  b
</output>
```
## Change
```
UPDATE: output::text "-" => "b"
```
