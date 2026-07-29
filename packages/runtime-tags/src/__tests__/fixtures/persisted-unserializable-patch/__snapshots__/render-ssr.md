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

# Update `{"$global":{"persisted":true},"label":"second","detail":{"id":2}}` failed: Unable to serialize a patch value
