# Render `{"show":false,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
```

# Update `{"show":true,"$global":{"persisted":true}}`
## Console
```
ERROR "navigate() document fallback: Error: a2__gone"
```

# Update
```js
assert.equal(document.querySelector("div.host")?.textContent || "", "");
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update
```js
assert.equal(;
document.querySelector("button.count")?.textContent,
"clicked 1",
  )
```
