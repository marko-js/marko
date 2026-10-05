# Render
```html
<button>
  toggle
</button>
<div
  class="c"
/>
<div />
<div
  class="f h"
/>
<div
  class="i"
/>
<div
  class="l m l"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  class="c d"
/>
<div
  class="e"
/>
<div
  class="f g"
/>
<div
  class="i j k"
/>
<div
  class="l m l"
/>
```
## Change
```
UPDATE: .c.d[class] "c" => "c d"
UPDATE: .e[class] null => "e"
UPDATE: .f.g[class] "f h" => "f g"
UPDATE: .i.j.k[class] "i" => "i j k"
UPDATE: .i.j.k[class] "i j" => "i j k"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  class="c"
/>
<div
  class=""
/>
<div
  class="f h"
/>
<div
  class="i"
/>
<div
  class="l m l"
/>
```
## Change
```
UPDATE: .c[class] "c d" => "c"
UPDATE: div:nth-of-type(2)[class] "e" => ""
UPDATE: .f.h[class] "f g" => "f h"
UPDATE: .i[class] "i j k" => "i"
UPDATE: .i[class] "i k" => "i"
```
