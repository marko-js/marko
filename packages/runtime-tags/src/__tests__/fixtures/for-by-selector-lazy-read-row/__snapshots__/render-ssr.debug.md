# Render
```html
<button
  class="b1"
>
  b
</button>
<button
  class="w1"
>
  whole
</button>
<button
  class="b2"
>
  b
</button>
<button
  class="w2"
>
  whole
</button>
<button
  class="b3"
>
  b
</button>
<button
  class="w3"
>
  whole
</button>
<button
  class="b4"
>
  b
</button>
<button
  class="w4"
>
  whole
</button>
<div
  class="log"
/>
```
## Console
```
LOG "eval h"
LOG "eval h"
LOG "eval h"
LOG "eval h"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="b1"
>
  b
</button>
<button
  class="w1"
>
  whole
</button>
<button
  class="b2"
>
  b
</button>
<button
  class="w2"
>
  whole
</button>
<button
  class="b3"
>
  b
</button>
<button
  class="w3"
>
  whole
</button>
<button
  class="b4"
>
  b
</button>
<button
  class="w4"
>
  whole
</button>
<div
  class="log"
>
  [c]
</div>
```
## Change
```
UPDATE: .log::text "" => "[c]"
```
## Console
```
LOG "eval h"
LOG "eval h"
LOG "eval h"
LOG "eval h"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="b1"
>
  b
</button>
<button
  class="w1"
>
  whole
</button>
<button
  class="b2"
>
  b
</button>
<button
  class="w2"
>
  whole
</button>
<button
  class="b3"
>
  b
</button>
<button
  class="w3"
>
  whole
</button>
<button
  class="b4"
>
  b
</button>
<button
  class="w4"
>
  whole
</button>
<div
  class="log"
>
  [c][b]
</div>
```
## Change
```
UPDATE: .log::text "[c]" => "[c][b]"
```
## Console
```
LOG "eval h"
LOG "eval h"
```
