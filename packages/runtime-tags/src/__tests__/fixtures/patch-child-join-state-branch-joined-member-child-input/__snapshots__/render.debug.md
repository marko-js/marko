# Render `{"a":"x","b":"p","show":true}`
```html
<p>
  xk
</p>
<em>
  x-k
</em>
<p>
  xp
</p>
<em>
  x-p
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```

# Update
```js
d.querySelector(sel).click();
```
```html
<em>
  x-k
</em>
<p>
  xp
</p>
<em>
  x-p
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
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
  xk
</p>
<em>
  x-k
</em>
<p>
  xp
</p>
<em>
  x-p
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
INSERT: p
UPDATE: p:nth-of-type(1)::text " " => "xk"
```

# Update `{"a":"y","b":"q","show":true}`
```html
<p>
  yk
</p>
<em>
  y-k
</em>
<p>
  yq
</p>
<em>
  y-q
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "xp" => "yq"
UPDATE: em:nth-of-type(2)::text "x-p" => "y-q"
UPDATE: em:nth-of-type(1)::text "x-k" => "y-k"
UPDATE: p:nth-of-type(1)::text "xk" => "yk"
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  ykk
</p>
<em>
  y-kk
</em>
<p>
  yq
</p>
<em>
  y-q
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "y-k" => "y-kk"
UPDATE: p:nth-of-type(1)::text "yk" => "ykk"
```

# Update `{"a":"z","b":"r","show":true}`
```html
<p>
  zkk
</p>
<em>
  z-kk
</em>
<p>
  zr
</p>
<em>
  z-r
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "yq" => "zr"
UPDATE: em:nth-of-type(2)::text "y-q" => "z-r"
UPDATE: em:nth-of-type(1)::text "y-kk" => "z-kk"
UPDATE: p:nth-of-type(1)::text "ykk" => "zkk"
```
