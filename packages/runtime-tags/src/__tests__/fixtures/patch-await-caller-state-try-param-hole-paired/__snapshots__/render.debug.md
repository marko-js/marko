# Render `{"promise":{},"label":"L"}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a:L
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
  a:M
</p>
```
## Change
```
UPDATE: p::text "a:L" => "a:M"
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
  swapped:M
</p>
```
## Change
```
UPDATE: p::text "a:M" => "swapped:M"
```
