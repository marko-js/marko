# Render `{"a":"x","b":"p","show":true}`
```html
<p>
  xk
</p>
<p>
  xk
</p>
<button
  class="t"
>
  t
</button>
<p>
  xp
</p>
<p>
  xp
</p>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  xkk
</p>
<p>
  xkk
</p>
<button
  class="t"
>
  t
</button>
<p>
  xp
</p>
<p>
  xp
</p>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "xk" => "xkk"
UPDATE: p:nth-of-type(2)::text "xk" => "xkk"
```

# Update `{"a":"y","b":"q","show":true}`
```html
<p>
  ykk
</p>
<p>
  ykk
</p>
<button
  class="t"
>
  t
</button>
<p>
  yq
</p>
<p>
  yq
</p>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(4)::text "xp" => "yq"
UPDATE: p:nth-of-type(1)::text "xkk" => "ykk"
UPDATE: p:nth-of-type(2)::text "xkk" => "ykk"
UPDATE: p:nth-of-type(3)::text "xp" => "yq"
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  ykk
</p>
<button
  class="t"
>
  t
</button>
<p>
  yq
</p>
<p>
  yq
</p>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```
## Change
```
REMOVE: p
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  ykk
</p>
<p>
  ykk
</p>
<button
  class="t"
>
  t
</button>
<p>
  yq
</p>
<p>
  yq
</p>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p:nth-of-type(1)::text " " => "ykk"
```

# Update `{"a":"z","b":"r","show":true}`
```html
<p>
  zkk
</p>
<p>
  zkk
</p>
<button
  class="t"
>
  t
</button>
<p>
  zr
</p>
<p>
  zr
</p>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(4)::text "yq" => "zr"
UPDATE: p:nth-of-type(2)::text "ykk" => "zkk"
UPDATE: p:nth-of-type(3)::text "yq" => "zr"
UPDATE: p:nth-of-type(1)::text "ykk" => "zkk"
```
