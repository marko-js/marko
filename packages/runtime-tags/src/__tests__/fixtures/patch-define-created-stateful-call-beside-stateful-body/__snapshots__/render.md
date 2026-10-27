# Render `{"show":false,"label":"a"}`
```html
<em>
  const1
</em>
<button
  class="inc"
>
  +
</button>
<i>
  dyn
</i>
<em>
  u1
</em>
<button
  class="inc"
>
  +
</button>
<button
  id="t"
>
  toggle
</button>
```
## Console
```
LOG "inner effect" "const"
LOG "inner effect" "u"
```

# Update `{"show":true,"label":"b"}`
```html
<em>
  const1
</em>
<button
  class="inc"
>
  +
</button>
<i>
  b
</i>
<em>
  const1
</em>
<button
  class="inc"
>
  +
</button>
<i>
  dyn
</i>
<em>
  u1
</em>
<button
  class="inc"
>
  +
</button>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
INSERT: em, button, i
UPDATE: em:nth-of-type(1)::text@5 "" => "1"
```
## Console
```
LOG "inner effect" "const"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<em>
  const2
</em>
<button
  class="inc"
>
  +
</button>
<i>
  b
</i>
<em>
  const1
</em>
<button
  class="inc"
>
  +
</button>
<i>
  dyn
</i>
<em>
  u1
</em>
<button
  class="inc"
>
  +
</button>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text@5 "1" => "2"
```

# Update
```js
document.querySelector("#t").click();
```
```html
<em>
  const2
</em>
<button
  class="inc"
>
  +
</button>
<i>
  b
</i>
<div
  label="dyn"
/>
<div
  isopen=""
  text="u"
/>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
INSERT: div:nth-of-type(1) + div
REMOVE: div:nth-of-type(2) + em
REMOVE: div:nth-of-type(2) + .inc
UPDATE: div:nth-of-type(2)[isopen] null => ""
UPDATE: div:nth-of-type(2)[text] null => "u"
INSERT: i + div
REMOVE: div:nth-of-type(1) + em
REMOVE: div:nth-of-type(1) + .inc
REMOVE: div:nth-of-type(1) + i
UPDATE: div:nth-of-type(1)[label] null => "dyn"
```

# Update `{"show":true,"label":"c"}`
```html
<em>
  const2
</em>
<button
  class="inc"
>
  +
</button>
<i>
  c
</i>
<div
  label="dyn"
/>
<div
  isopen=""
  text="u"
/>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
UPDATE: i::text "b" => "c"
```

# Update `{"show":false,"label":"d"}`
```html
<div
  label="dyn"
/>
<div
  isopen=""
  text="u"
/>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
REMOVE: em
REMOVE: button
REMOVE: i
```

# Update `{"show":true,"label":"e"}`
```html
<em>
  const1
</em>
<button
  class="inc"
>
  +
</button>
<i>
  e
</i>
<div
  label="dyn"
/>
<div
  isopen=""
  text="u"
/>
<button
  id="t"
>
  toggle
</button>
```
## Change
```
INSERT: em, .inc, i
UPDATE: em::text@5 "" => "1"
```
## Console
```
LOG "inner effect" "const"
```
