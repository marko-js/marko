# Render `{"$global":{"msg":"hello"}}`
```html
<div
  id="hello!0"
>
  hello!0
</div>
<p>
  hello
</p>
<button>
  b
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  id="undefined!1"
>
  undefined!1
</div>
<p>
  hello
</p>
<button>
  b
</button>
```
## Change
```
UPDATE: #undefined!1[id] "hello!0" => "undefined!1"
UPDATE: #undefined!1::text "hello!0" => "undefined!1"
```
## Console
```
ERROR "`$global.msg` is not serialized to the client, so this read is `undefined`. Add `msg` to `serializedGlobals` at the render call."
```
