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
  id="hello!1"
>
  hello!1
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
UPDATE: #hello!1[id] "hello!0" => "hello!1"
UPDATE: #hello!1::text "hello!0" => "hello!1"
```
