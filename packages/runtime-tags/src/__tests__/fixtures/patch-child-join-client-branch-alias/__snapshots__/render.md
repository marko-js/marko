# Render `{"a":"x","b":"p"}`
```html
<em>
  x
</em>
<p>
  xk
</p>
<em>
  x
</em>
<p>
  xp
</p>
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
  x
</em>
<p>
  xkk
</p>
<em>
  x
</em>
<p>
  xp
</p>
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

# Update `{"a":"y","b":"q"}`
```html
<em>
  y
</em>
<p>
  ykk
</p>
<em>
  y
</em>
<p>
  yq
</p>
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
UPDATE: em:nth-of-type(1)::text "x" => "y"
UPDATE: em:nth-of-type(2)::text "x" => "y"
UPDATE: p:nth-of-type(1)::text "xkk" => "ykk"
UPDATE: p:nth-of-type(2)::text "xp" => "yq"
```

# Update
```js
d.querySelector(sel).click();
```
```html
<em>
  y
</em>
<em>
  y
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
REMOVE: em:nth-of-type(1) + p
REMOVE: em:nth-of-type(2) + p
```

# Update
```js
d.querySelector(sel).click();
```
```html
<em>
  y
</em>
<p>
  ykk
</p>
<em>
  y
</em>
<p>
  yq
</p>
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
INSERT: em:nth-of-type(1) + p
INSERT: em:nth-of-type(2) + p
UPDATE: p:nth-of-type(1)::text " " => "ykk"
UPDATE: p:nth-of-type(2)::text " " => "yq"
```

# Update `{"a":"z","b":"r"}`
```html
<em>
  z
</em>
<p>
  zkk
</p>
<em>
  z
</em>
<p>
  zr
</p>
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
UPDATE: em:nth-of-type(1)::text "y" => "z"
UPDATE: em:nth-of-type(2)::text "y" => "z"
UPDATE: p:nth-of-type(1)::text "ykk" => "zkk"
UPDATE: p:nth-of-type(2)::text "yq" => "zr"
```
