# Render `{"show":false,"$global":{"persisted":true}}`

# Update `{"show":true,"$global":{"persisted":true}}`
```html
<button
  class="child"
>
  1
</button>
```
## Change
```
INSERT: .child
```

# Update
```js
assert.equal(childText(document), "1");
```

# Update
```js
document.querySelector("button.child").click();
```
```html
<button
  class="child"
>
  2
</button>
```
## Change
```
UPDATE: .child::text "1" => "2"
```

# Update
```js
assert.equal(childText(document), "2");
```
