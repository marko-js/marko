# Render `{"promise":{},"label":"L"}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a:3
</p>
```

# Update `{"promise":{},"label":"L"}`

# Update `{"promise":{},"label":"M"}`

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
  swapped:3
</p>
```
## Change
```
UPDATE: p::text@0 "a" => "swapped"
```
