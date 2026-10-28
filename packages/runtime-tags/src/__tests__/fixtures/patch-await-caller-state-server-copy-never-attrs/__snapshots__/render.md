# Render `{"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<a
  class="a"
  data-x="a"
  href="a"
>
  a
</a>
```

# Update `{"label":"b","promise":{}}`

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
<a
  class="swapped"
  data-x="swapped"
  href="swapped"
>
  swapped
</a>
```
## Change
```
UPDATE: .swapped[href] "a" => "swapped"
UPDATE: .swapped[class] "a" => "swapped"
UPDATE: .swapped[data-x] "a" => "swapped"
UPDATE: .swapped::text "a" => "swapped"
```
