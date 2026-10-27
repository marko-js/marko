# Render `{"a":"x","items":["s","t"]}`
```html
<p>
  xp
</p>
<p>
  xq
</p>
<div>
  s:x
</div>
<button
  class="t"
>
  t
</button>
<p>
  xs
</p>
<p>
  xt
</p>
<div>
  s:x
</div>
<button
  class="t"
>
  t
</button>
<button
  class="l"
>
  l
</button>
```

# Update
```js
document.querySelector("button.l").click();
```
```html
<p>
  xp
</p>
<p>
  xq
</p>
<p>
  xr
</p>
<div>
  s:x
</div>
<button
  class="t"
>
  t
</button>
<p>
  xs
</p>
<p>
  xt
</p>
<div>
  s:x
</div>
<button
  class="t"
>
  t
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(3)::text " " => "xr"
```

# Update `{"a":"y","items":["u"]}`
```html
<p>
  yp
</p>
<p>
  yq
</p>
<p>
  yr
</p>
<div>
  s:y
</div>
<button
  class="t"
>
  t
</button>
<p>
  yu
</p>
<div>
  s:y
</div>
<button
  class="t"
>
  t
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: p:nth-of-type(4)::text "xs" => "yu"
REMOVE: p:nth-of-type(4) + p
UPDATE: p:nth-of-type(1)::text "xp" => "yp"
UPDATE: p:nth-of-type(2)::text "xq" => "yq"
UPDATE: p:nth-of-type(3)::text "xr" => "yr"
REMOVE: div:nth-of-type(1)::text("s:x")
INSERT: div:nth-of-type(1)::text("s:y")
REMOVE: div:nth-of-type(2)::text("s:x")
INSERT: div:nth-of-type(2)::text("s:y")
```

# Update `{"a":"z","items":["u","v"]}`
```html
<p>
  zp
</p>
<p>
  zq
</p>
<p>
  zr
</p>
<div>
  s:z
</div>
<button
  class="t"
>
  t
</button>
<p>
  zu
</p>
<p>
  zv
</p>
<div>
  s:z
</div>
<button
  class="t"
>
  t
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: p:nth-of-type(4)::text "yu" => "zu"
INSERT: p:nth-of-type(4) + p
UPDATE: p:nth-of-type(1)::text "yp" => "zp"
UPDATE: p:nth-of-type(2)::text "yq" => "zq"
UPDATE: p:nth-of-type(3)::text "yr" => "zr"
REMOVE: div:nth-of-type(1)::text("s:y")
INSERT: div:nth-of-type(1)::text("s:z")
REMOVE: div:nth-of-type(2)::text("s:y")
INSERT: div:nth-of-type(2)::text("s:z")
```
