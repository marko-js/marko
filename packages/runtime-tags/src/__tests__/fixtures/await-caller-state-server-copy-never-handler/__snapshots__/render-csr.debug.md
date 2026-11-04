# Render `{"show":false,"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update `{"show":true,"label":"b","promise":{}}`

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
<button
  class="h"
>
  h
</button>
```
## Change
```
INSERT: .swap + :is(p, .h)
UPDATE: p::text " " => "a"
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
<button
  class="h"
>
  h
</button>
```
## Change
```
UPDATE: p::text "a" => "swapped"
```
