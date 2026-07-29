# Render `{"show":false,"$global":{"persisted":true}}`

# Update `{"show":true,"$global":{"persisted":true}}`
```html
<header
  class="frame"
>
  STATIC FRAME
</header>
<button
  class="frame-count"
>
  0
</button>
<span
  class="sibling"
>
  VISIBLE
</span>
```
## Change
```
INSERT: .frame, .frame-count, .sibling
```

# Update
```js
assert.equal(;
document.querySelector("header.frame")?.textContent,
"STATIC FRAME",
  )
```

# Update
```js
document.querySelector("button.frame-count").click();
```
```html
<header
  class="frame"
>
  STATIC FRAME
</header>
<button
  class="frame-count"
>
  1
</button>
<span
  class="sibling"
>
  VISIBLE
</span>
```
## Change
```
UPDATE: .frame-count::text "0" => "1"
```

# Update
```js
assert.equal(;
document.querySelector("button.frame-count")?.textContent,
"1",
  )
```
