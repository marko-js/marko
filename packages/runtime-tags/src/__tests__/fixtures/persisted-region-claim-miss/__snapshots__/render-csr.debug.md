# Render `{"banner":true,"$global":{"persisted":true}}`
```html
<button
  class="bump"
>
  1
</button>
<aside
  class="banner"
>
  system maintenance at midnight
</aside>
```

# Update `{"banner":true,"$global":{"persisted":true}}`

# Update `{"banner":true,"$global":{"persisted":true}}`

# Update
```js
document.querySelector("button.bump").click();
```
```html
<button
  class="bump"
>
  2
</button>
<aside
  class="banner"
>
  system maintenance at midnight
</aside>
```
## Change
```
UPDATE: .bump::text "1" => "2"
```

# Update
```js
assert.equal(document.querySelector("button.bump")?.textContent, "2");
```

# Update
```js
assert.equal(banner(document), "system maintenance at midnight");
```
