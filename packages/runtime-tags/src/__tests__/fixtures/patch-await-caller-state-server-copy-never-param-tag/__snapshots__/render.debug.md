# Render `{"show":false,"promise":{},"label":"L"}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update `{"show":true,"promise":{},"label":"L"}`
```html
<button
  class="swap"
>
  swap
</button>
<span>
  a:L
</span>
```
## Change
```
INSERT: .swap + span
UPDATE: span::text " " => "a:L"
```

# Update `{"show":true,"promise":{},"label":"M"}`
```html
<button
  class="swap"
>
  swap
</button>
<span>
  a:M
</span>
```
## Change
```
UPDATE: span::text "a:L" => "a:M"
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
<span>
  swapped:M
</span>
```
## Change
```
UPDATE: span::text "a:M" => "swapped:M"
```
