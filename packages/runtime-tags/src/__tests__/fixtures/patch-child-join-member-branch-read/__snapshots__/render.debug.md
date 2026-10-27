# Render `{"a":"x","b":"p"}`
```html
<p>
  xk
</p>
<em>
  x
</em>
<p>
  xp
</p>
<em>
  x
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
  x
</em>
<p>
  xp
</p>
<em>
  x
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

# Update `{"a":"y","b":"q"}`
```html
<p>
  ykk
</p>
<em>
  y
</em>
<p>
  yq
</p>
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
UPDATE: p:nth-of-type(2)::text "xp" => "yq"
UPDATE: p:nth-of-type(1)::text "xkk" => "ykk"
UPDATE: em:nth-of-type(1)::text "x" => "y"
UPDATE: em:nth-of-type(2)::text "x" => "y"
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
REMOVE: p:nth-of-type(1) + em
REMOVE: p:nth-of-type(2) + em
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
  y
</em>
<p>
  yq
</p>
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
INSERT: p:nth-of-type(1) + em
INSERT: p:nth-of-type(2) + em
UPDATE: em:nth-of-type(1)::text " " => "y"
UPDATE: em:nth-of-type(2)::text " " => "y"
```

# Update `{"a":"z","b":"r"}`
```html
<p>
  zkk
</p>
<em>
  z
</em>
<p>
  zr
</p>
<em>
  z
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
UPDATE: p:nth-of-type(1)::text "ykk" => "zkk"
UPDATE: em:nth-of-type(1)::text "y" => "z"
UPDATE: em:nth-of-type(2)::text "y" => "z"
```
