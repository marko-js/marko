# Render `{"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update
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
## Change
```
INSERT: .swap + .a
UPDATE: .a[href] null => "a"
UPDATE: .a[class] null => "a"
UPDATE: .a[data-x] null => "a"
UPDATE: .a::text " " => "a"
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
