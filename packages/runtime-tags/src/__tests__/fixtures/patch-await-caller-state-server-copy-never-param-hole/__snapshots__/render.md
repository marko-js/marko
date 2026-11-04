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
<p>
  a:L
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text " " => "a:L"
```

# Update `{"show":true,"promise":{},"label":"M"}`
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
