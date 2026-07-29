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
## Console
```
ERROR "navigate() document fallback: Error: A persisted update selected a renderer (\";packages/runtime-tags/src/__tests__/fixtures/persisted-region-claim-miss/template.marko_r0|b0|09febA9SzudYm_H7\") with no registered update and no loader, so the navigation cannot complete client-side."
```

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
