# Render `{"$global":{"settings":{"message":"a globals message long enough to dedup"},"serializedGlobals":["settings"]}}`
```html
<button
  class="add"
>
  add
</button>
<span
  class="count"
>
  0
</span>
<button
  class="log"
>
  log
</button>
```

# Update
```js
container.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
<span
  class="count"
>
  1
</span>
<button
  class="log"
>
  log
</button>
```
## Change
```
UPDATE: .count::text "0" => "1"
```
