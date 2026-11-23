# Render
```html
<button>
  toggle
</button>
<div
  class="a  b   d  e "
/>
<div
  class="f i"
/>
<div
  class="x"
/>
<div />
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
  class="a  b  on"
/>
<div
  class="f g  h"
/>
<div
  class="x p q"
/>
<div
  style="color:red"
/>
```
## Change
```
UPDATE: .a.b.on[class] "a  b   d  e " => "a  b  on"
UPDATE: .f.g.h[class] "f i" => "f g  h"
UPDATE: .x.p.q[class] "x" => "x p q"
UPDATE: div:nth-of-type(4)[style] null => "color :red"
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
  class="a  b   d  e "
/>
<div
  class="f i"
/>
<div
  class="x"
/>
<div />
```
## Change
```
UPDATE: .a.b.d.e[class] "a  b  on" => "a  b   d  e "
UPDATE: .f.i[class] "f g  h" => "f i"
UPDATE: .x[class] "x p q" => "x"
UPDATE: div:nth-of-type(4)[style] "color :red" => null
```
