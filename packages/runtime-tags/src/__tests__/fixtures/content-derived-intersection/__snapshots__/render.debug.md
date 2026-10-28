# Render `{"label":"a"}`
```html
<button
  class="t"
>
  t
</button>
<button
  class="k"
>
  a!:0
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="t"
>
  t
</button>
<button
  class="k"
>
  a!:1
</button>
```
## Change
```
UPDATE: .k::text "a!:0" => "a!:1"
```
