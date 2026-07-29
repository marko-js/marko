# Render `{"show":false,"$global":{"persisted":true}}`

# Update `{"show":true,"$global":{"persisted":true}}`
```html
<button
  class="child"
>
  server 0
</button>
```
## Change
```
INSERT: .child
UPDATE: .child::text@0 "" => "server"
```

# Update
```js
assert.equal(childText(document), "server 0");
```

# Update
```js
document.querySelector("button.child").click();
```
```html
<button
  class="child"
>
  server 1
</button>
```
## Change
```
UPDATE: .child::text@7 "0" => "1"
```

# Update
```js
assert.equal(childText(document), "server 1");
```
