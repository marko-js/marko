# Render `{"$global":{"persisted":true},"label":"first","detail":{"id":1}}`
```html
<button>
  0
</button>
<button
  class="log"
>
  log first
</button>
```

# Update
```js
document.querySelector("button:not(.log)").click();
```
```html
<button>
  1
</button>
<button
  class="log"
>
  log first
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "1"
```

# Update `{"$global":{"persisted":true},"label":"second","detail":{"id":2}}` failed: Unable to serialize "input.detail" in packages/runtime-tags/src/__tests__/fixtures/persisted-unserializable-patch/template.marko. Values referenced in the browser must be serializable. A patch cannot express it, so this navigation falls back to a document load.
