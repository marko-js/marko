# Render `{"a":"x","b":"p","c":"u"}`
```html
<p>
  xk
</p>
<em>
  xu
</em>
<p>
  xp
</p>
<em>
  xu
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
<p>
  xkk
</p>
<em>
  xu
</em>
<p>
  xp
</p>
<em>
  xu
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
UPDATE: p:nth-of-type(1)::text "xk" => "xkk"
```

# Update `{"a":"y","b":"q","c":"v"}`
```html
<p>
  ykk
</p>
<em>
  yv
</em>
<p>
  yq
</p>
<em>
  yv
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
UPDATE: em:nth-of-type(1)::text "xu" => "yv"
UPDATE: em:nth-of-type(2)::text "xu" => "yv"
UPDATE: p:nth-of-type(1)::text "xkk" => "ykk"
UPDATE: p:nth-of-type(2)::text "xp" => "yq"
```

# Update
```js
d.querySelector(sel).click();
```
```html
<em>
  yv
</em>
<em>
  yv
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
REMOVE: em:nth-of-type(1) + p
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
  yv
</em>
<p>
  yq
</p>
<em>
  yv
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
INSERT: em:nth-of-type(1) + p
UPDATE: p:nth-of-type(1)::text " " => "ykk"
UPDATE: p:nth-of-type(2)::text " " => "yq"
```

# Update `{"a":"z","b":"r","c":"w"}`
```html
<p>
  zkk
</p>
<em>
  zw
</em>
<p>
  zr
</p>
<em>
  zw
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
UPDATE: em:nth-of-type(1)::text "yv" => "zw"
UPDATE: em:nth-of-type(2)::text "yv" => "zw"
UPDATE: p:nth-of-type(1)::text "ykk" => "zkk"
UPDATE: p:nth-of-type(2)::text "yq" => "zr"
```
