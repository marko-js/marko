# Render `{"promise":{},"label":"L"}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
```

# Update `{"promise":{},"label":"L"}`

# Update `{"promise":{},"label":"M"}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
```
## Change
```
REMOVE: #document > html > head > title::text("L")
INSERT: #document > html > head > title::text("M")
```

# Update
```js
document.querySelector("button.swap").click();
```
```html
<button
  class="swap"
>
  swap
</button>
<p>
  swapped
</p>
```
## Change
```
UPDATE: p::text "a" => "swapped"
```
