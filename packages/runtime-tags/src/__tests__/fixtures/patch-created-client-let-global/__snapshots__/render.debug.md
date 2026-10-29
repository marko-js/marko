# Render `{"show":false,"a":"x"}`

# Update `{"show":true,"a":"x"}`
```html
<span />
<button
  class="b"
>
  b
</button>
```
## Change
```
INSERT: span, .b
```
## Console
```
ERROR "`$global.g` is not serialized to the client, so this read is `undefined`. Serialized globals are embedded in the page: add `g` to `serializedGlobals` at the render call only if it holds no secrets; otherwise copy the field the client needs into its own `$global` key and serialize that."
WARN "Text content of `NaN` renders as nothing; convert it to a string or number to render it."
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
## Console
```
ERROR "`$global.g` is not serialized to the client, so this read is `undefined`. Serialized globals are embedded in the page: add `g` to `serializedGlobals` at the render call only if it holds no secrets; otherwise copy the field the client needs into its own `$global` key and serialize that."
WARN "Text content of `NaN` renders as nothing; convert it to a string or number to render it."
```

# Update `{"show":true,"a":"y"}`
